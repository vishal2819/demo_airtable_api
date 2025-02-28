import AirtableService from '../services/airtableService.js';
import config from '../config/index.js';

export const listRecords = async (req, res, next) => {
  try {
    const { 
      fields, 
      filterByFormula, 
      maxRecords, 
      pageSize, 
      sort, 
      view,
      offset 
    } = req.query;

    const records = await AirtableService.listRecords(
      config.airtable.baseId, 
      config.airtable.tables.people,
      {
        fields,
        filterByFormula,
        maxRecords,
        pageSize,
        sort,
        view,
        offset
      }
    );

    res.json(records);
  } catch (error) {
    next(error);
  }
};

export const getRecord = async (req, res, next) => {
  try {
    const { recordId } = req.params;
    const record = await AirtableService.getRecord(
      config.airtable.baseId,
      config.airtable.tables.people,
      recordId
    );
    res.json(record);
  } catch (error) {
    next(error);
  }
};

export const createRecords = async (req, res, next) => {
  try {
    const { records } = req.body;
    const created = await AirtableService.createRecords(
      config.airtable.baseId,
      config.airtable.tables.people,
      records
    );
    res.status(201).json(created);
  } catch (error) {
    next(error);
  }
};

export const updateRecords = async (req, res, next) => {
  try {
    const { records } = req.body;
    const updated = await AirtableService.updateRecords(
      config.airtable.baseId,
      config.airtable.tables.people,
      records
    );
    res.json(updated);
  } catch (error) {
    next(error);
  }
};

export const replaceRecords = async (req, res, next) => {
  try {
    const { records } = req.body;
    const replaced = await AirtableService.updateRecords(
      config.airtable.baseId,
      config.airtable.tables.people,
      records
    );
    res.json(replaced);
  } catch (error) {
    next(error);
  }
};

export const deleteRecords = async (req, res, next) => {
  try {
    const { records } = req.query;
    const deleted = await AirtableService.deleteRecords(
      config.airtable.baseId,
      config.airtable.tables.people,
      records
    );
    res.json(deleted);
  } catch (error) {
    next(error);
  }
}; 