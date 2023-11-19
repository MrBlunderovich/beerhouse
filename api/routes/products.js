const express = require("express");
const Product = require("../model/product");
const router = express.Router();

router.get("/", (req, res) => {
  Product.find()
    .exec()
    .then((data) => res.json(data));
});

router
  .route("/:id")
  .get((req, res) => {
    res.send(`products! ${req.id}`);
  })
  .post((req, res) => {
    //
  });

router.param("id", (req, res, next, id) => {
  console.log(id);
  req.id = id;
  next();
});

module.exports = router;
