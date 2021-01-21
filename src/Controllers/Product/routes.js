const express = require("express");
const router = express.Router();
const {
  CreateProduct,
  GetProducts,
  GetProductLimitTen,
  GetProductsSearch,
  DeleteProduct,
  EditProduct,
  GetProductsRandomLimitTen,
  GetProductsBySubCategory,
  GetProductById,
} = require("./controller");

router
  .route("/")
  .post(CreateProduct)
  .get(GetProducts)
  .delete(DeleteProduct)
  .put(EditProduct);
router.route("/Limit").post(GetProductLimitTen).get(GetProductsRandomLimitTen);
router.route("/Filter").post(GetProductsSearch);
router
  .route("/GetBySubCategory/:strIdSubCategory")
  .get(GetProductsBySubCategory);
router.route("/ById/:_id").get(GetProductById);

module.exports = router;
