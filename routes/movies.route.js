import express from "express";

const router = express.Router();
import {
  readMovies,
  createMovie,
  updateMovie,
  deleteMovie,
} from "../controllers/movies.controller.js";

// Create - plural
router.post("/", createMovie);

//read - plural
router.get("/", readMovies);

//update - singular
router.put("/:id", updateMovie);

//delete - singular
router.delete("/:id", deleteMovie);

export default router;
