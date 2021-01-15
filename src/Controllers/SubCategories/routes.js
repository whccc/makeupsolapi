const express = require("express");
const router = express.Router();
const {
  CreateSubCategory,
  GetSubCategoriesByCategories,
  PutSubCategory,
} = require("./controller");

router.route("/").post(CreateSubCategory).put(PutSubCategory);

router.route("/:strIdCategory").get(GetSubCategoriesByCategories);

module.exports = router;
