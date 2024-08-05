const mongoose = require('mongoose')
const config = require('../config/index')

module.exports = (app) => {
  const { dbUser, dbPassword, dbName, dbHost, dbPort } = config
  const dbUri = `mongodb://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`

  mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }).then(() => {
    console.log("Connected to MongoDB!")
    console.log("Connection string used:", dbUri)
  }).catch((err) => {
    console.error("Error connecting to MongoDB:", err)
    console.error("Connection string used:", dbUri)
  })
  require("require-all")(__dirname + "/../models")
};



