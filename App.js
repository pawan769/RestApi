require("dotenv").config();
const express = require("express");

const app = express();
const products_routes = require("./routes/products");
const connectDB = require("./db/connect");
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

//middleware
app.use("/api/products", products_routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(PORT, () => {
      console.log("The server is listening on port:", PORT);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
