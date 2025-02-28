import citiesRoutes from './routes/cities.js';
import companiesRoutes from './routes/companies.js';
import config from './config/index.js';
import cors from 'cors';
import { errorHandler } from './middleware/errorHandler.js';
import express from 'express';
import peopleRoutes from './routes/people.js';
import { rateLimiter } from './middleware/rateLimiter.js';
import syncRoutes from './routes/sync.js';

const app = express();

// Middleware
app.use(cors({ origin: config.cors.origin }));
app.use(express.json());
app.use(rateLimiter);

// Routes - match exact Airtable API structure
app.use(`/v0/${config.airtable.baseId}/People`, peopleRoutes);
app.use(`/v0/${config.airtable.baseId}/Cities`, citiesRoutes);
app.use(`/v0/${config.airtable.baseId}/Companies`, companiesRoutes);
app.use('/sync', syncRoutes);

// Error handling middleware
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port} in ${config.nodeEnv} mode`);
});
