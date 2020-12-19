const express = require('express')
const router = express.Router()
const { CreateProduct } = require('./controller')

router.route('/')
  .post(CreateProduct)

module.exports = router
