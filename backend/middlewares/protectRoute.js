import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";
import { ENV_VARS } from "../config/envVars.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies["jwt-filmzap"];
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authorization token not found. Access denied.",
      });
    }
    const decoded = jwt.verify(token, ENV_VARS.JWT_SECRET);
    if (!decoded) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid token. Access denied." });
    }
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "User not found." });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log("Error in protect route middleware:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
