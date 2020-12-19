const { Schema, model } = require('mongoose')

const Product = new Schema({
  strCode: {
    type: String,
    trim: true,
    required: true
  },
  strName: {
    type: String,
    trim: true,
    required: true
  },
  strDescription: {
    type: String,
    trim: true,
    required: true
  },
  strPrice: {
    type: String,
    trim: true,
    required: true
  },
  strIdCategory: {
    type: String,
    trim: true,
    required: true
  },
  strIdSubCategory: {
    type: String,
    trim: true,
    required: true
  },
  ArrayImages: {
    type: Array,
    trim: true,
    required: true
  }
}, {
  timestamps: true
})

module.exports = model('Product', Product)
