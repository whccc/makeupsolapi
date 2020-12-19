const express = require('express')
const router = express.Router()
const Categories = require('../Controllers/Categories/routes')
const SubCategories = require('../Controllers/SubCategories/routes')

router.use('/categories', Categories)
router.use('/subcategories', SubCategories)
module.exports = router
