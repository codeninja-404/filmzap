import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default:
      "https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_1280.png",
  },
  searchHistory: {
    type: Array,
    default: [],
  },
});

export const User = mongoose.model("User", userSchema);
