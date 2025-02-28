import * as CompaniesController from '../controllers/companiesController.js';

import express from 'express';
import { validateAuth } from '../middleware/auth.js';

const router = express.Router();

// Apply auth middleware to all routes
router.use(validateAuth);

// List records
router.get('/', CompaniesController.listRecords);

// Retrieve a record
router.get('/:recordId', CompaniesController.getRecord);

// Create records
router.post('/', CompaniesController.createRecords);

// Update records
router.patch('/', CompaniesController.updateRecords);

// Delete records
router.delete('/', CompaniesController.deleteRecords);

export default router; 