import * as CitiesController from '../controllers/citiesController.js';

import express from 'express';
import { validateAuth } from '../middleware/auth.js';

const router = express.Router();

// Apply auth middleware to all routes
router.use(validateAuth);

// List records
router.get('/', CitiesController.listRecords);

// Retrieve a record
router.get('/:recordId', CitiesController.getRecord);

// Create records
router.post('/', CitiesController.createRecords);

// Update records
router.patch('/', CitiesController.updateRecords);

// Delete records
router.delete('/', CitiesController.deleteRecords);

export default router; 