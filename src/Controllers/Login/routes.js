const express = require('express')
const router = express.Router()
const { Login } = require('./controller')
router.route('/')
  .post(Login)

module.exports = router
