import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connStr =
      process.env.MONGO_URI || "mongodb://localhost:27017/auth_db";

    if (!connStr) {
      throw new Error("MONGO_URI is not defined in environment variables");
    }

    await mongoose.connect(connStr);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
