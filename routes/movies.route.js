import express from "express";

const router = express.Router();

// Create - plural
router.post("/", (req, res) => {
  res.send("create all movies");
});

//read - plural
router.get("/", (req, res) => {
  res.send("get all movies");
});

//update - singular
router.put("/:id", (req, res) => {
  res.send("update a movie");
});

//delete - singular
router.delete("/:id", (req, res) => {
  res.send("delete a movie");
});

export default router;
