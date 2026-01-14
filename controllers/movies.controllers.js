const readMovies = (req, res) => {
  res.send("get all movies");
};
const createMovie = (req, res) => {
  console.log(req.body);
  return res.json(req.body);
};
const updateMovie = (req, res) => {
  res.send("update a movie");
};
const deleteMovie = (req, res) => {
  res.send("delete a movie");
};
export { readMovies, createMovie, updateMovie, deleteMovie };
