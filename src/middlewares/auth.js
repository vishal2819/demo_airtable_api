import jwt from "jsonwebtoken";
import { AppName, adminEmail, adminName } from "../constants.js";

// Middleware to authenticate requests
const authMiddleware = (req, res, next) => {
  // Get the token from the request header
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach the decoded user data to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    res.status(400).json({ error: "Invalid token." });
  }
};

// Middleware to check if the user is an admin
const adminMiddleware = (req, res, next) => {
  if (req.user.email !== adminEmail || req.user.name !== adminName) {
    return res
      .status(403)
      .json({ error: "Access denied. Admin privileges required." });
  }
  next();
};

export { authMiddleware, adminMiddleware };
