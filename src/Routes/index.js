const express = require('express')
const router = express.Router()
const Categories = require('../Controllers/Categories/routes')

router.use('/categories', Categories)

module.exports = router
