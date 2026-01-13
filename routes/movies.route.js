import express from "express";

const router = express.Router();

// Create - plural
router.post("/movies", (req, res) => {
  res.send("create all movies");
});

//read - plural
router.get("/movies", (req, res) => {
  res.send("get all movies");
});

//update - singular
router.put("/movies/:id", (req, res) => {
  res.send("update a movie");
});

//delete - singular
router.delete("/movies/:id", (req, res) => {
  res.send("delete a movie");
});

export default router;
