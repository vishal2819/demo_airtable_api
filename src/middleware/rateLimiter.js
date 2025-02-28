import rateLimit from 'express-rate-limit';

export const rateLimiter = rateLimit({
  windowMs: 1000, // 1 second
  max: 5, // 5 requests per second per base
  message: {
    error: {
      status: 429,
      message: 'Rate limit exceeded. Please try again later.'
    }
  },
  standardHeaders: true,
  legacyHeaders: false
}); 