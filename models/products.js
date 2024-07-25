const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: {
      values: ["Mobile", "Laptop", "Printer", "watch", "Tablet", "Wearable"],
      message: `{VALUE} is not supported`,
    },
  },
  price: {
    type: Number,
    required: [true, "Price must be provided!"],
  },
  featured: {
    type: Boolean,
    required: false,
  },
  rating: {
    type: Number,
    default: 4.9,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ["apple", "samsung", "dell", "mi"],
      message: `{VALUE} is not supported`,
    },
  },
});

module.exports = mongoose.model("Product", productSchema);
