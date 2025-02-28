import AirtableService from '../services/airtableService.js';
import config from '../config/index.js';

const tableName = config.airtable.tables.companies;

export const listRecords = async (req, res, next) => {
  try {
    const { 
      maxRecords, 
      view,
      filterByFormula,
      pageSize,
      offset,
      sort,
      fields 
    } = req.query;

    const records = await AirtableService.listRecords({
      tableName,
      params: {
        maxRecords: maxRecords ? parseInt(maxRecords) : undefined,
        view,
        filterByFormula,
        pageSize: pageSize ? parseInt(pageSize) : undefined,
        offset,
        sort,
        fields: fields ? fields.split(',') : undefined
      }
    });

    res.json(records);
  } catch (error) {
    next(error);
  }
};

export const getRecord = async (req, res, next) => {
  try {
    const record = await AirtableService.getRecord(tableName, req.params.recordId);
    res.json(record);
  } catch (error) {
    next(error);
  }
};

export const createRecords = async (req, res, next) => {
  try {
    const created = await AirtableService.createRecords(tableName, req.body.records);
    res.status(201).json(created);
  } catch (error) {
    next(error);
  }
};

export const updateRecords = async (req, res, next) => {
  try {
    const updated = await AirtableService.updateRecords(tableName, req.body.records);
    res.json(updated);
  } catch (error) {
    next(error);
  }
};

export const deleteRecords = async (req, res, next) => {
  try {
    const deleted = await AirtableService.deleteRecords(tableName, req.query.records);
    res.json(deleted);
  } catch (error) {
    next(error);
  }
}; 