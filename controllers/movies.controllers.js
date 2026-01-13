const readMovies = (req, res) => {
  res.send("get all movies");
};
const createMovie = (req, res) => {
  res.send("create all movies");
};
const updateMovie = (req, res) => {
  res.send("update a movie");
};
const deleteMovie = (req, res) => {
  res.send("delete a movie");
};
export { readMovies, createMovie, updateMovie, deleteMovie };
