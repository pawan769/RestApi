const Product = require("../models/products");

const getAllProducts = async (req, res) => {
  const { company, name, featured, sort, select } = req.query;

  const queryObj = {};

  if (company) {
    queryObj.company = company;
  }
  if (featured) {
    queryObj.featured = featured;
  }
  if (name) {
    queryObj.name = { $regex: name, $options: "i" };
  }

  let queryResult = Product.find(queryObj);
  if (sort) {
    let sortFix = sort.split(",").join(" ");
    queryResult = queryResult.sort(sortFix);
  }
  if (select) {
    let selectFix = select.split(",").join(" ");
    queryResult = queryResult.select(selectFix);
  }

  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 10;

  const skip = (page - 1) * limit;

  const Products = await queryResult.skip(skip).limit(limit);
  res.status(200).json(Products);
};
const getAllProductsTest = async (req, res) => {
  const Products = await Product.find({});
  res.status(200).json(Products);
};
const getSingleProduct = async (req, res) => {
  console.log(req.params);
  const queryObj = {};

  const { name: parName, id } = req.params;
  if (parName) {
    queryObj.name = { $regex: parName, $options: "i" };
  }
  if (id) {
    queryObj._id = id;
  }

  let queryResult = Product.find(queryObj);
  const Products = await Product.find(queryObj);
  res.status(200).json(Products);
};

module.exports = { getAllProducts, getAllProductsTest, getSingleProduct };
