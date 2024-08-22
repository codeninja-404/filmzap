import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";
export const connectDB = async () => {
  try {
    const dbConnection = await mongoose.connect(ENV_VARS.MONGO_URI);
    console.log("MONGODB Connected : " + dbConnection.connection.host);
  } catch (error) {
    console.error("Error Connecting to MONGODB : " + error.message);
    process.exit(1); // 1 means there was an error 0 means success
  }
};
