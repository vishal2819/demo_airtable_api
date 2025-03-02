import AirtableService from './airtableService.js';
import Cities from '../models/cities.model.js';
import Companies from '../models/companies.model.js';
import People from '../models/people.model.js';
import config from '../config/index.js';

class SyncService {
  static async syncPeople() {
    try {
      const response = await AirtableService.listRecords('People');
      let newCount = 0;
      let updatedCount = 0;
      
      for (const record of response.records) {
        // Check if record exists
        const existingRecord = await People.findOne({ airtableId: record.id });
        
        if (!existingRecord) {
          // New record - create it
          await People.create({
            airtableId: record.id,
            fields: record.fields,
            lastSyncedAt: new Date()
          });
          newCount++;
        } else {
          // Check if fields have changed
          const hasChanged = JSON.stringify(existingRecord.fields) !== JSON.stringify(record.fields);
          
          if (hasChanged) {
            // Update the record
            existingRecord.fields = record.fields;
            existingRecord.lastSyncedAt = new Date();
            await existingRecord.save();
            updatedCount++;
          }
        }
      }
      
      return { 
        success: true, 
        total: response.records.length,
        new: newCount,
        updated: updatedCount,
        unchanged: response.records.length - (newCount + updatedCount)
      };
    } catch (error) {
      console.error('Error syncing people:', error);
      throw error;
    }
  }

  static async syncCities() {
    try {
      const response = await AirtableService.listRecords('Cities');
      let newCount = 0;
      let updatedCount = 0;
      
      for (const record of response.records) {
        // Check if record exists
        const existingRecord = await Cities.findOne({ airtableId: record.id });
        
        if (!existingRecord) {
          // New record - create it
          await Cities.create({
            airtableId: record.id,
            fields: record.fields,
            lastSyncedAt: new Date()
          });
          newCount++;
        } else {
          // Check if fields have changed
          const hasChanged = JSON.stringify(existingRecord.fields) !== JSON.stringify(record.fields);
          
          if (hasChanged) {
            // Update the record
            existingRecord.fields = record.fields;
            existingRecord.lastSyncedAt = new Date();
            await existingRecord.save();
            updatedCount++;
          }
        }
      }
      
      return { 
        success: true, 
        total: response.records.length,
        new: newCount,
        updated: updatedCount,
        unchanged: response.records.length - (newCount + updatedCount)
      };
    } catch (error) {
      console.error('Error syncing cities:', error);
      throw error;
    }
  }

  static async syncCompanies() {
    try {
      const response = await AirtableService.listRecords('Companies');
      let newCount = 0;
      let updatedCount = 0;
      
      for (const record of response.records) {
        // Check if record exists
        const existingRecord = await Companies.findOne({ airtableId: record.id });
        
        if (!existingRecord) {
          // New record - create it
          await Companies.create({
            airtableId: record.id,
            fields: record.fields,
            lastSyncedAt: new Date()
          });
          newCount++;
        } else {
          // Check if fields have changed
          const hasChanged = JSON.stringify(existingRecord.fields) !== JSON.stringify(record.fields);
          
          if (hasChanged) {
            // Update the record
            existingRecord.fields = record.fields;
            existingRecord.lastSyncedAt = new Date();
            await existingRecord.save();
            updatedCount++;
          }
        }
      }
      
      return { 
        success: true, 
        total: response.records.length,
        new: newCount,
        updated: updatedCount,
        unchanged: response.records.length - (newCount + updatedCount)
      };
    } catch (error) {
      console.error('Error syncing companies:', error);
      throw error;
    }
  }
  
  // Helper method to reduce code duplication
  static async _syncTable(tableName, Model) {
    try {
      const response = await AirtableService.listRecords(tableName);
      let newCount = 0;
      let updatedCount = 0;
      
      for (const record of response.records) {
        // Check if record exists
        const existingRecord = await Model.findOne({ airtableId: record.id });
        
        if (!existingRecord) {
          // New record - create it
          await Model.create({
            airtableId: record.id,
            fields: record.fields,
            lastSyncedAt: new Date()
          });
          newCount++;
        } else {
          // Check if fields have changed
          const hasChanged = JSON.stringify(existingRecord.fields) !== JSON.stringify(record.fields);
          
          if (hasChanged) {
            // Update the record
            existingRecord.fields = record.fields;
            existingRecord.lastSyncedAt = new Date();
            await existingRecord.save();
            updatedCount++;
          }
        }
      }
      
      return { 
        success: true, 
        total: response.records.length,
        new: newCount,
        updated: updatedCount,
        unchanged: response.records.length - (newCount + updatedCount)
      };
    } catch (error) {
      console.error(`Error syncing ${tableName}:`, error);
      throw error;
    }
  }
}

export default SyncService; 