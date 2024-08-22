import { configDotenv } from "dotenv";
configDotenv();

export const ENV_VARS = {
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT || 5000,
};
