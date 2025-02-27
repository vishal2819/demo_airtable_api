import airtableClient from "../config.js/airtable.js";

class AirtableService {
  constructor() {
    this.commentBaseName = process.env.COMMENT_BASE_NAME;
    this.commentTableName = process.env.COMMENT_TABLE_NAME;
    this.workspaceId = process.env.WORKSPACE_ID;
    this.initializeBase();
  }

  async initializeBase() {
    try {
      const baseId = await this.ensureBaseExists();
      await this.ensureTableExists(baseId);
    } catch (error) {
      console.error("Initialization error:", error);
    }
  }

  async ensureBaseExists() {
    const bases = await this.getBases();
    let base = bases.find((b) => b.name === this.commentBaseName);

    if (!base) {
      base = await this.createBase({
        name: this.commentBaseName,
        tables: [
          {
            name: this.commentTableName,
            fields: [
              { name: "Text", type: "singleLineText" },
              { name: "RecordID", type: "singleLineText" },
              { name: "UserName", type: "singleLineText" },
              { name: "UserEmail", type: "singleLineText" },
            ],
          },
        ],
        workspaceId: this.workspaceId,
      });
    }
    return base.id;
  }

  async ensureTableExists(baseId) {
    const tables = await this.getTablesInBase(baseId);
    const tableExists = tables.some((t) => t.name === this.commentTableName);

    if (!tableExists) {
      await this.createTable(baseId, {
        name: this.commentTableName,
        fields: [
          { name: "Text", type: "singleLineText" },
          { name: "RecordID", type: "singleLineText" },
          { name: "UserName", type: "singleLineText" },
          { name: "UserEmail", type: "singleLineText" },
        ],
      });
    }
  }

  // Base Operations
  async getBases() {
    const response = await airtableClient.get("/meta/bases");
    return response.data.bases;
  }

  async createBase(payload) {
    const response = await airtableClient.post("/meta/bases", payload);
    return response.data;
  }

  // Table Operations
  async getTablesInBase(baseId) {
    const response = await airtableClient.get(`/meta/bases/${baseId}/tables`);
    return response.data.tables;
  }

  async createTable(baseId, tableConfig) {
    const response = await airtableClient.post(
      `/meta/bases/${baseId}/tables`,
      tableConfig
    );
    return response.data;
  }

  // Record Operations
  async createRecord(baseId, tableId, fields) {
    const response = await airtableClient.post(`/${baseId}/${tableId}`, {
      records: [{ fields }],
    });
    return response.data;
  }

  async getRecords(baseId, tableId, formula = "") {
    const response = await airtableClient.get(
      `/${baseId}/${tableId}?filterByFormula=${encodeURIComponent(formula)}`
    );
    return response.data;
  }

  async updateRecord(baseId, tableId, recordId, fields) {
    const response = await airtableClient.patch(
      `/${baseId}/${tableId}/${recordId}`,
      { fields }
    );
    return response.data;
  }

  async deleteRecord(baseId, tableId, recordId) {
    const response = await airtableClient.delete(
      `/${baseId}/${tableId}/${recordId}`
    );
    return response.data;
  }

  async getRecordById(baseId, tableId, recordId) {
    const response = await airtableClient.get(
      `/${baseId}/${tableId}/${recordId}`
    );
    return response.data;
  }

  async createRecordComment(baseId, tableId, recordId, comment) {
    const response = await airtableClient.post(
      `/${baseId}/${tableId}/${recordId}/comments`,
      { text: comment }
    );
    return response.data;
  }

  async getRecordComments(baseId, tableId, recordId) {
    const response = await airtableClient.get(
      `/${baseId}/${tableId}/${recordId}/comments`
    );
    return response.data;
  }
}

export default new AirtableService();
