// vue.config.json
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  devServer: {
    port: 8088,
  },
  outputDir: 'blog-admin',
  //publicPath: process.env.NODE_ENV === 'production' ? '/admin/': '/',
  configureWebpack: {
    plugins: [
      // CleanWebpackPlugin: 清理输出目录
      new CleanWebpackPlugin(),
    ],
  },
}
