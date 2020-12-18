const express = require('express')
const router = express.Router()
const { CreateCategories } = require('./controller')

router.route('/')
  .post(CreateCategories)

module.exports = router
