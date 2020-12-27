const express = require('express')
const router = express.Router()
const { LoginCreate, Login } = require('./controller')
router.route('/Create')
  .post(LoginCreate)

router.route('/')
  .post(Login)

module.exports = router
