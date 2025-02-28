export const validateAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      error: {
        status: 401,
        message: 'Missing or invalid authorization token'
      }
    });
  }

  const token = authHeader.split(' ')[1];
  req.token = token;
  next();
}; 