import AirtableService from '../services/airtableService.js';

export const listRecords = async (req, res, next) => {
  try {
    const { maxRecords, view } = req.query;
    
    const records = await AirtableService.listRecords('People', {
      maxRecords: maxRecords ? parseInt(maxRecords) : undefined,
      view
    });

    res.json(records);
  } catch (error) {
    next(error);
  }
};

export const getRecord = async (req, res, next) => {
  try {
    const record = await AirtableService.getRecord(req.params.recordId);
    res.json(record);
  } catch (error) {
    next(error);
  }
};

export const createRecords = async (req, res, next) => {
  try {
    const created = await AirtableService.createRecords(req.body.records);
    res.status(201).json(created);
  } catch (error) {
    next(error);
  }
};

export const updateRecords = async (req, res, next) => {
  try {
    const updated = await AirtableService.updateRecords(req.body.records);
    res.json(updated);
  } catch (error) {
    next(error);
  }
};

export const deleteRecords = async (req, res, next) => {
  try {
    const deleted = await AirtableService.deleteRecords(req.query.records);
    res.json(deleted);
  } catch (error) {
    next(error);
  }
}; 