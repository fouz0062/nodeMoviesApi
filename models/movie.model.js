import { model, Schema } from "mongoose";

//define schema
const schema = new Schema({
  title: String,
  description: String,
});

//create model
const movie = model("Movie", schema);

export default movie;
