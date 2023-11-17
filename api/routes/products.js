import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.send(`get products!`);
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
