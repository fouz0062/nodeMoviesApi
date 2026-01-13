import mongoose from "mongoose";

const dbURL = `mongodb + srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.7vetbtt.mongodb.net/?appName=Cluster0`;

const connectDB = async () => {
  await mongoose.connect(dbURL);
};

export default connectDB;
