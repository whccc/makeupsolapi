const express = require('express')
const router = express.Router()
const { CreateCategories, GetCategories, GetCategoriesPagination, UpdateCategorie, DeleteCategorie } = require('./controller')

router.route('/')
  .post(CreateCategories)
  .get(GetCategories)
  .put(UpdateCategorie)
  .delete(DeleteCategorie)
router.route('/Pagination')
  .post(GetCategoriesPagination)

module.exports = router
