const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3000;
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors({ credentials: true }));
app.use(express.json());

const distributorsRouter = require("./routes/distributors");
const productsRouter = require("./routes/products");
app.use("/api/distributors", distributorsRouter);
app.use("/api/products", productsRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
