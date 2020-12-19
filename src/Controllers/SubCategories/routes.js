const express = require('express')
const router = express.Router()
const { CreateSubCategory } = require('./controller')

router.route('/')
  .post(CreateSubCategory)

module.exports = router
