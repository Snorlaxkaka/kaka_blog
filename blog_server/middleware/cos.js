const multer = require('multer')
const COS = require('cos-nodejs-sdk-v5')

const cos = new COS({
  SecretId: 'AKIDZ0IYu5EHOOG5DIOI8nERdlvyuriU4Vo1',
  SecretKey: 'GRXTCwY9rWOKIBythE0nhlxeI3wl2bDj',
})

let Bucket = 'blog-image-1321643115'
let Region = 'ap-guangzhou'

let cosfun = function (filename, path) {
  return new Promise((resolve, reject) => {
    cos.uploadFile({
      Bucket,
      Region,
      Key: 'image/' + filename, //上传到image文件夹下
      FilePath: path,
    })
      .then(res => {
        resolve(res.Location)
      })
      .catch(err => {
        reject(err)
      })
  })
}

// 二进制上传
let buffer = function (filename, path) {
  return new Promise((resolve, reject) => {
    cos.putObject({
      Bucket,
      Region,
      Key: '改为你自己的' + filename,              /* 必须 */
      Body: Buffer.from(path),
    })
      .then(res => {
        resolve(res.Location)
      })
      .catch(err => {
        reject(err)
      })
  })
}



// 配置上传文件1.所在的目录和2.更改文件名
const storage = multer.diskStorage({//磁盘存储引擎方法
  destination: (req, file, cb) => {//存储前端传来的文件
    cb(null, 'uploads')  //先上传到uploads文件夹
  },
  filename: (req, file, cb) => {
    // 防止文件重名更改前缀
    let fileFormat = (file.originalname).split(".")
    // Date.numw()时间戳6789045678889
    let num = `${Date.now()}-${Math.floor(Math.random(0, 1) * 10000000)}${"."}${fileFormat[fileFormat.length - 1]}`
    cb(null, num)
  }
})

const upload = multer({ storage })

module.exports = { upload, cosfun, buffer }