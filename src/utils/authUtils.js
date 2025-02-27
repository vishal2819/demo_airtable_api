import jwt from "jsonwebtoken";

// Generate a JWT token
export const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email, name: user.name },
    process.env.JWT_SECRET,
    { expiresIn: "1h" } // Token expires in 1 hour
  );
};

// Verify a JWT token
export const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};
