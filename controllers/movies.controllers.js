import movie from "../models/movie.model.js";
//read all movies
const readMovies = async (req, res) => {
  try {
    const movies = await movie.find();
    return res.status(200).json(movies);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

//read one movie
const movieById = async (req, res) => {
  try {
    const movieID = await movie.findById(req.params.id);
    if (!movieID) {
      return res.status(404).json({ message: "Movie not found" });
    } else {
      return res.status(200).json(movieID);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//create a movie
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

const updateMovie = async (req, res) => {
  try {
    const updatedMovie = await movie.findByIdAndUpdate(
      { _id: req.params.id },
      {
        title: req.body.title,
        description: req.body.description,
      },
      { new: true }
    );
    return res.status(200).json(updatedMovie);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
const deleteMovie = (req, res) => {
  res.send("delete a movie");
};
export { readMovies, createMovie, updateMovie, deleteMovie, movieById };
