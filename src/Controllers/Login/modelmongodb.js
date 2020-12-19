const { Schema, model } = require('mongoose')

const Login = new Schema({
  strUser: {
    type: String,
    trim: true,
    required: true
  },
  strPassword: {
    type: String,
    trim: true,
    required: true
  }
})

module.exports = model('Login', Login)
