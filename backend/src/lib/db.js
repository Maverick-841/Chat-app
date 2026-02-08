import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    const { MONGO_URI } = ENV;
    if (!MONGO_URI) throw new Error("MONGO_URI is not set");

    console.log("Attempting to connect to MongoDB...");
    const conn = await mongoose.connect(ENV.MONGO_URI);
    console.log("MONGODB CONNECTED:", conn.connection.host);
  } catch (error) {
    console.error("Error connection to MONGODB:");
    console.error("- Message:", error.message);
    if (error.reason) console.error("- Reason:", error.reason);
    // Don't exit process in serverless environment
  }
};
