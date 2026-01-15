import express from "express";
import {
  readMovies,
  createMovie,
  updateMovie,
  deleteMovie,
  movieById,
} from "../controllers/movies.controllers.js";

const router = express.Router();
// Create - plural
router.post("/", createMovie);

//read - plural
router.get("/", readMovies);

//read - singular
router.get("/:id", movieById);

//update - singular
router.put("/:id", updateMovie);

//delete - singular
router.delete("/:id", deleteMovie);

export default router;
