import * as SyncController from '../controllers/syncController.js';

import express from 'express';
import { validateAuth } from '../middleware/auth.js';

const router = express.Router();

router.use(validateAuth);

router.post('/all', SyncController.syncAll);
router.post('/people', SyncController.syncPeople);
router.post('/cities', SyncController.syncCities);
router.post('/companies', SyncController.syncCompanies);

export default router; 