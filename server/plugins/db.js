module.exports = (app) => {
  const mongoose = require("mongoose")
  //连接的是本地运行的 MongoDB 实例，数据库名称为 blog。
  mongoose.connect("mongodb://127.0.0.1:27017/blog", {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
  })
  require("require-all")(__dirname + "/../models")
}
