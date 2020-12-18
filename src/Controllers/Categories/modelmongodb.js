const { Schema, model } = require('mongoose')
const Categories = new Schema({
  strName: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
})

module.exports = model('Categories', Categories)
