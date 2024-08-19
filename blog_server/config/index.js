const fs = require('fs')
const path = require('path')

// 根据 NODE_ENV 设置配置文件路径
const env = process.env.NODE_ENV
const envFilePath = path.resolve(__dirname, `/../.env.${env}`) // 修改路径到上一级目录

// 读取配置文件并将其解析为环境变量
if (fs.existsSync(envFilePath)) {
  const envConfig = fs.readFileSync(envFilePath, 'utf8').split('\n')
  envConfig.forEach((line) => {
    const [key, value] = line.split('=')
    if (key && value) {
      process.env[key.trim()] = value.trim()
    }
  })
} else {
  console.error(`No .env file found for environment: ${env}`)
}

module.exports = {
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  port: process.env.PORT
}
