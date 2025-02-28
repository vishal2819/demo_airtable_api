import axios from 'axios';
import config from '../config/index.js';

const airtableClient = axios.create({
  baseURL: 'https://api.airtable.com/v0',
  headers: {
    Authorization: `Bearer ${config.airtable.apiKey}`,
    'Content-Type': 'application/json'
  }
});

class AirtableService {
  static async listRecords(tableName, params = {}) {
    try {
      const cleanParams = Object.entries(params)
        .reduce((acc, [key, value]) => {
          if (value !== undefined) {
            acc[key] = value;
          }
          return acc;
        }, {});

      const response = await airtableClient.get(
        `/${config.airtable.baseId}/${tableName}`,
        { params: cleanParams }
      );
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  static async getRecord(recordId) {
    try {
      const response = await airtableClient.get(
        `/${config.airtable.baseId}/${config.airtable.tableName}/${recordId}`
      );
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  static async createRecords(records) {
    try {
      const response = await airtableClient.post(`/${config.airtable.baseId}/${config.airtable.tableName}`, { records });
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  static async updateRecords(records) {
    try {
      const response = await airtableClient.patch(`/${config.airtable.baseId}/${config.airtable.tableName}`, { records });
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  static async deleteRecords(recordIds) {
    try {
      const response = await airtableClient.delete(`/${config.airtable.baseId}/${config.airtable.tableName}`, {
        params: { records: recordIds }
      });
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  static handleError(error) {
    if (error.response) {
      const { status, data } = error.response;
      console.error('Airtable API Error:', {
        status,
        message: data.error?.message,
        details: data.error
      });
      throw {
        status,
        message: data.error?.message || 'Airtable API error',
        details: data.error
      };
    }
    throw error;
  }
}

export default AirtableService; 