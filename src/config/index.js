import dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  airtable: {
    apiKey: process.env.AIRTABLE_API_KEY,
    baseId: 'app5VB9BbEtcXgolQ', // Hardcoded since it's fixed
    tables: {
      people: 'People',
      cities: 'Cities',
      companies: 'Companies'
    }
  },
  cors: {
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000'
  },
  jwt: {
    secret: process.env.JWT_SECRET
  }
}; 