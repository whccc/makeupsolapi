const express = require("express");
const router = express.Router();
const {
  CreateSubCategory,
  GetSubCategoriesByCategories,
  PutSubCategory,
  GetCategoriesWithSubCategories,
} = require("./controller");

router.route("/").post(CreateSubCategory).put(PutSubCategory);

router.route("/:strIdCategory").get(GetSubCategoriesByCategories);
router
  .route("/navegation/GetCategoriesWithSubCategories")
  .get(GetCategoriesWithSubCategories);
module.exports = router;
