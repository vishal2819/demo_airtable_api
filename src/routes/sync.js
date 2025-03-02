import * as SyncController from '../controllers/syncController.js';

import config from '../config/index.js';
import express from 'express';
import { validateAuth } from '../middleware/auth.js';

const router = express.Router();

// Apply auth middleware to all routes
router.use(validateAuth);

// Sync all data
router.post('/all', SyncController.syncAll);

// Sync specific tables
router.post('/people', SyncController.syncPeople);
router.post('/cities', SyncController.syncCities);
router.post('/companies', SyncController.syncCompanies);

export default router; 