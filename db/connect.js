const mongoose = require("mongoose");

const connectDB = (uri) => {
  console.log("this is from database");
  return mongoose.connect(uri);
};
module.exports = connectDB;
