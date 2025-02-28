import AirtableService from './airtableService.js';
import Cities from '../models/cities.model.js';
import Companies from '../models/companies.model.js';
import People from '../models/people.model.js';

class SyncService {
  static async syncPeople() {
    try {
      const response = await AirtableService.listRecords('People');
      
      for (const record of response.records) {
        await People.findOneAndUpdate(
          { airtableId: record.id },
          { 
            fields: record.fields,
            lastSyncedAt: new Date()
          },
          { upsert: true, new: true }
        );
      }
      
      return { success: true, count: response.records.length };
    } catch (error) {
      throw error;
    }
  }

  static async syncCities() {
    try {
      const response = await AirtableService.listRecords('Cities');
      
      for (const record of response.records) {
        await Cities.findOneAndUpdate(
          { airtableId: record.id },
          { 
            fields: record.fields,
            lastSyncedAt: new Date()
          },
          { upsert: true, new: true }
        );
      }
      
      return { success: true, count: response.records.length };
    } catch (error) {
      throw error;
    }
  }

  static async syncCompanies() {
    try {
      const response = await AirtableService.listRecords('Companies');
      
      for (const record of response.records) {
        await Companies.findOneAndUpdate(
          { airtableId: record.id },
          { 
            fields: record.fields,
            lastSyncedAt: new Date()
          },
          { upsert: true, new: true }
        );
      }
      
      return { success: true, count: response.records.length };
    } catch (error) {
      throw error;
    }
  }
}

export default SyncService; 