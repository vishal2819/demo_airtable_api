import logger from "./logger.js";

// Centralized error handling middleware
const errorHandler = (err, req, res, next) => {
  // Log the error
  logger.error(`Error: ${err.message || err}`);

  // Default error response
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  // Send the error response
  res.status(statusCode).json({
    success: false,
    message,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};

export default errorHandler;
