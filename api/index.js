/* import dotenv from "dotenv";
import express, { json } from "express";
import cors from "cors";
import distributorsRouter from "./routes/distributors.js";
import productsRouter from "./routes/products.js";
import mongoose from "mongoose";
import { Product } from "./model/product.js"; */
//const PORT = process.env.PORT || 3000;
const express = require("express");
const cors = require("cors");

//dotenv.config();

const app = express();
app.use(cors({ credentials: true }));
app.use(express.json());

//app.use("/api/distributors", distributorsRouter);
//app.use("/api/products", productsRouter);
app.get("/api/products", (req, res) => {
  res.json("get products!");
});

/* mongoose.connect(process.env.MDB_STRING);

const newShinyProduct = await Product.create({
  barcode: 1234567890123,
  name: "Producto bueno",
  unit: "litro",
  category: "alcohol",
});

const thatProduct = await Product.find({}, "-_id").exec();
console.log(thatProduct); */

app.listen(2000);
