import * as RecordsController from '../controllers/recordsController.js';

import config from '../config/index.js';
import express from 'express';
import { validateAuth } from '../middleware/auth.js';

const router = express.Router();

// Apply auth middleware to all routes
router.use(validateAuth);

// Match the exact Airtable API endpoint
router.get('/', RecordsController.listRecords);

// Retrieve a record
router.get('/:recordId', RecordsController.getRecord);

// Create records
router.post('/', RecordsController.createRecords);

// Update records
router.patch('/', RecordsController.updateRecords);

// Delete records
router.delete('/', RecordsController.deleteRecords);

export default router; 