const express = require("express");
const Product = require("../model/product");
const errorHandler = require("../utils/errorHandler");
const { CONDITIONS } = require("../common/constants");
const formatProducts = require("../utils/formatProducts");
const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    const { state, search, category } = req.query;
    const query = { is_archived: false };
    category !== undefined && category !== "" && (query.category = category);
    query.condition = state || CONDITIONS[0];

    Product.find(query)
      .then((data) => res.json({ results: formatProducts(data) }))
      .catch((err) => errorHandler(err, req, res));
  })
  .post((req, res) => {
    Product.create(req.body)
      .then((data) => res.status(201).json(data))
      .catch((err) => errorHandler(err, req, res));
  });

/* router
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
}); */

module.exports = router;
