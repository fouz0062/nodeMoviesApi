import express from "express";
import movieRoutes from "./routes/movies.route.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

//CRUD operations
// Mount the movie routes
app.use("/movies", movieRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
