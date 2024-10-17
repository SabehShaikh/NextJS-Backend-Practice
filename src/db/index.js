import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load the environment variables

let isConnected = false; // Track the connection status


const connectDB = async () => {
  if (isConnected) {
    console.log("Database is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;
    console.log("Db connected");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

export default connectDB;
