import express from "express";
import movieRoutes from "./routes/movies.route.js";
import connectDB from "./lib/db.js";

const app = express();
const port = 3000;

// Connect to DB
connectDB();

app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

//CRUD operations
// using middleware for postman to read the data we sent
// for raw json data
app.use(express.json());
// for form data
app.use(express.urlencoded({ extended: true }));

// Mount the movie routes
app.use("/movies", movieRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
