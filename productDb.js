const connectDB = require("./db/connect");
const Product = require("./models/products");
const productJson = require("./product.json");
require("dotenv").config();

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    await Product.create(productJson);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};
start();
