const express = require("express");
const router = express.Router();

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
