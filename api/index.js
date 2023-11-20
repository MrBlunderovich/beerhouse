const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const distributorsRouter = require("./routes/distributors.js");
const productsRouter = require("./routes/products.js");
const mongoose = require("mongoose");

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ credentials: true }));

app.use("/api/distributors", distributorsRouter);
app.use("/api/products", productsRouter);
app.use("/api/users", usersRouter);

mongoose.connect(process.env.MDB_STRING);

/* const newShinyProduct = await Product.create({
  barcode: 1234567890123,
  name: "Producto bueno",
  unit: "litro",
  category: "alcohol",
}); */
/* 
const thatProduct = await Product.find({}, "-_id").exec();
console.log(thatProduct); */

app.listen(2000);
