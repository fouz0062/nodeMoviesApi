import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});
//CRUD operations

// Create - plural
app.post("/movies", () => {});

//read - plural
app.get("/movies", () => {});

//update - singular
app.put("/movies/:id", () => {});

//delete - singular
app.delete("/movies/:id", () => {});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
