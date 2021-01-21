const express = require("express");
const router = express.Router();
const Categories = require("../Controllers/Categories/routes");
const SubCategories = require("../Controllers/SubCategories/routes");
const Product = require("../Controllers/Product/routes");
const Login = require("../Controllers/Login/routes");
const Order = require("../Controllers/Order/routes");

router.use("/categories", Categories);
router.use("/subcategories", SubCategories);
router.use("/product", Product);
router.use("/login", Login);
router.use("/Order", Order);

module.exports = router;
