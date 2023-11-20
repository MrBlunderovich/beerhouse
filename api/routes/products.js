const express = require("express");
const Product = require("../model/product");
const errorHandler = require("../utils/errorHandler");
const { CONDITIONS } = require("../common/constants");
const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    const { state, search, category } = req.query;
    const query = { is_archived: false };
    category !== undefined && category !== "" && (query.category = category);
    query.state = state || CONDITIONS[0];

    Product.find(query)
      .then((data) => res.json({ query, results: data }))
      .catch((err) => errorHandler(err, req, res));
  })
  .post((req, res) => {
    Product.create(req.body)
      .then((data) => res.status(201).json(data))
      .catch((err) => errorHandler(err, req, res));
  });

router.route("/archive/:id").delete(async (req, res) => {
  const { id } = req.params;
  const doc = await Product.findOne({ id });
  doc.is_archived = false;
  doc
    .save()
    .then((data) => res.status(200).json(data))
    .catch((err) => errorHandler(err, req, res));
});

router.route("/archive").get((req, res) => {
  console.log("archive");
  Product.find({ is_archived: true })
    .then((data) => res.json({ results: data }))
    .catch((err) => errorHandler(err, req, res));
});

router
  .route("/:id")
  .get((req, res) => {
    const { id } = req.params;
    Product.findOne({ id })
      .then((data) => res.json(data))
      .catch((err) => errorHandler(err, req, res));
  })
  .put(async (req, res) => {
    const { id } = req.params;
    const doc = await Product.findOne({ id });
    Object.assign(doc, req.body);
    doc
      .save()
      .then((data) => res.status(200).json(data))
      .catch((err) => errorHandler(err, req, res));
  })
  .delete(async (req, res) => {
    const { id } = req.params;
    const doc = await Product.findOne({ id });
    doc.is_archived = true;
    doc
      .save()
      .then((data) => res.status(200).json(data))
      .catch((err) => errorHandler(err, req, res));
  });

/* router.param("id", (req, res, next, id) => {
  console.log(id);
  req.id = id;
  next();
}); */

module.exports = router;
