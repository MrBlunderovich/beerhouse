import dotenv from "dotenv";
import express, { json } from "express";
import cors from "cors";
import distributorsRouter from "./routes/distributors.js";
import productsRouter from "./routes/products.js";
import mongoose from "mongoose";
import { Product } from "./model/product.js";
const PORT = process.env.PORT || 3000;
dotenv.config();

const app = express();
app.use(cors({ credentials: true }));
app.use(json());

app.use("/api/distributors", distributorsRouter);
app.use("/api/products", productsRouter);

mongoose.connect(process.env.MDB_STRING);

const newShinyProduct = await Product.create({
  barcode: 1234567890123,
  name: "Producto bueno",
  unit: "litro",
  category: "alcohol",
});

const thatProduct = await Product.find({}, "-_id").exec();
console.log(thatProduct);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
