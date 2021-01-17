const express = require("express");
const router = express.Router();
const {
  CreateProduct,
  GetProducts,
  GetProductLimitTen,
  GetProductsSearch,
  DeleteProduct,
  EditProduct,
} = require("./controller");

router
  .route("/")
  .post(CreateProduct)
  .get(GetProducts)
  .delete(DeleteProduct)
  .put(EditProduct);
router.route("/Limit").post(GetProductLimitTen);
router.route("/Filter").post(GetProductsSearch);

module.exports = router;
