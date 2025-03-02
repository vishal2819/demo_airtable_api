import dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  airtable: {
    apiKey: process.env.AIRTABLE_API_KEY,
    baseId: process.env.BASE_ID || 'app5VB9BbEtcXgolQ',
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