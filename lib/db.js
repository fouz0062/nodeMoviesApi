import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbURL = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.7vetbtt.mongodb.net/?appName=Cluster0`;

const connectDB = async () => {
  try {
    await mongoose.connect(dbURL);
    console.log("MongoDB connected successfully.");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    // Exit process with failure
    process.exit(1);
  }
};

export default connectDB;
