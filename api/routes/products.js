import { Router } from "express";
const router = Router();

router
  .route("/")
  .get((req, res) => {
    res.send(`get products!`);
  })
  .post((req, res) => {
    res.send(`post product!`);
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

export default router;
