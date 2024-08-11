const express = require("express");

const router = express.Router();

const {
  getAllProducts,
  getAllProductsTest,
  getSingleProduct,
} = require("../controllers/products");

router.route("/").get(getAllProducts);
router.route("/name/:name").get(getSingleProduct);
router.route("/id/:id").get(getSingleProduct);
router.route("/test").get(getAllProductsTest);

module.exports = router;
