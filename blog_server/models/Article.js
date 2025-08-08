/*
 * @Author: linjunjie 129569154+Snorlaxkaka@users.noreply.github.com
 * @Date: 2024-08-04 22:59:39
 * @LastEditors: linjunjie 129569154+Snorlaxkaka@users.noreply.github.com
 * @LastEditTime: 2025-08-08 18:55:36
 * @FilePath: \blog_server\models\Article.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  categories: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Category'
  }],
  title: {
    type: String
  },
  icon: {
    type: String
  },
  body: {
    type: String
  },
  // 显式定义时间字段，允许修改
  createdAt: {
    type: Date
  },
  updatedAt: {
    type: Date
  }
}, {
  timestamps: true // 仍然保留自动生成功能，但允许手动修改
})

module.exports = mongoose.model('Article', schema)