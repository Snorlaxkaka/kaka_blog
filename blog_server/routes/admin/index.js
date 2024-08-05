module.exports = (app) => {
  const express = require('express')
  const assert = require('http-assert')
  const jwt = require('jsonwebtoken')
  const AdminUser = require('../../models/AdminUser')
  const sendEmail = require('../../plugins/sendEmail.js')
  const router = express.Router({
    mergeParams: true,
  })
  const { upload, cosfun } = require('../../middleware/cos.js')
  router.post('/', async (req, res) => {
    const model = await req.Model.create(req.body)
    res.send(model)
  })
  router.put('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })
  router.delete('/:id', async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true,
    })
  })
  router.get('/', async (req, res) => {
    const queryOptions = {}
    if (req.Model.modelName === 'Category') {
      queryOptions.populate = 'parent'
    }
    const items = await req.Model.find().setOptions(queryOptions).limit(100)
    res.send(items)
  })
  router.get('/:id', async (req, res) => {
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })

  //登录校验中间件
  const authMiddleware = require('../../middleware/auth')

  //资源中间件
  const resourceMiddleware = require('../../middleware/resource')

  //资源路由
  app.use(
    '/admin/api/rest/:resource',
    authMiddleware(),
    resourceMiddleware(),
    router
  )

  //用于腾讯云cos图片上传
  app.post(
    '/admin/api/upload',
    authMiddleware(),
    upload.single('file'),
    async (req, res) => {
      try {
        const file = req.file
        const result = await cosfun(file.filename, file.path)
        file.url = 'http://' + result
        res.send(file)
      } catch (e) {
        console.error('File upload failed:', e)
        res.status(500).send({ error: 'File upload failed' })
      }

    }
  )

  //本地图片上传
  // const multer = require('multer')
  // const upload = multer({
  //   dest: __dirname + '/../../uploads',
  // })
  // app.post(
  //   '/admin/api/upload',
  //   authMiddleware(),
  //   upload.single('file'),
  //   async (req, res) => {
  //     const file = req.file
  //     file.url = `http://localhost:3000/uploads/${file.filename}`
  //     res.send(file)
  //   }
  // )

  // 第一次登录把注册注释取消
  app.post('/admin/api/register', async (req, res) => {
    const user = await AdminUser.create({
      username: req.body.username,
      password: req.body.password,
    })
    res.send(user)
  })

  //登录
  app.post('/admin/api/login', async (req, res) => {
    const { username, password } = req.body
    const user = await AdminUser.findOne({
      username,
    }).select('+password')
    assert(user, 422, '用户不存在')
    const isValid = require('bcryptjs').compareSync(password, user.password)
    assert(isValid, 422, '密码错误')
    const token = jwt.sign(
      {
        id: user._id,
      },
      app.get('secret')
    )
    res.send({
      token,
      username,
    })
  })

  app.post('/admin/api/email', async (req, res) => {
    sendEmail(req.body)
    res.send({
      ok: 'ok',
    })
  })

  //错误处理函数
  app.use(async (err, req, res, next) => {
    res.status(err.statusCode || 500).send({
      message: err.message,
    })
  })
}
