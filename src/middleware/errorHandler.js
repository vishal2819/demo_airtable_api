export const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  
  // Log error for debugging
  console.error(err);
  
  res.status(status).json({
    error: {
      status,
      message
    }
  });
}; 