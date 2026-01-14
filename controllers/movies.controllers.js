import movie from "../models/movie.model.js";
const readMovies = async (req, res) => {
  try {
    const movies = await movie.find();
    return res.status(200).json(movies);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
const createMovie = async (req, res) => {
  const newMovie = new movie({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedMovie = await newMovie.save();
    savedMovie.save();
    return res.status(201).json(savedMovie);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const updateMovie = (req, res) => {
  res.send("update a movie");
};
const deleteMovie = (req, res) => {
  res.send("delete a movie");
};
export { readMovies, createMovie, updateMovie, deleteMovie };
