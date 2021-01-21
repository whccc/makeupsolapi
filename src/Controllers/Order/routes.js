const express = require("express");
const router = express.Router();

const { PostOrderFinish } = require("./controller");

router.route("/").post(PostOrderFinish);

module.exports = router;
