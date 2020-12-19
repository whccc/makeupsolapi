const { Schema, model } = require('mongoose')
const SubCategories = new Schema({
  strName: {
    type: String,
    trim: true
  },
  strIdCategory: {
    type: String,
    trim: true,
    required: true
  }
}, {
  timestamps: true
})

module.exports = model('SubCategories', SubCategories)
