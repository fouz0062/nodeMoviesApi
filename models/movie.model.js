import { model, Schema } from "mongoose";

//define schema
const schema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
});

//create model
const movie = model("Movie", schema);

export default movie;
