import airtableService from "../services/airtable.services.js";

const airtableController = {
  getBases: async (req, res) => {
    try {
      const bases = await airtableService.getBases();
      res.json(bases);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createComment: async (req, res) => {
    try {
      const { recordId, text, userName, userEmail } = req.body;
      const result = await airtableService.createComment(
        process.env.COMMENT_BASE_ID,
        process.env.COMMENT_TABLE_NAME,
        { recordId, text, userName, userEmail }
      );
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getComments: async (req, res) => {
    try {
      const baseId = await airtableService.ensureBaseExists();
      const records = await airtableService.getRecords(
        baseId,
        process.env.COMMENT_TABLE_NAME
      );
      res.json(records);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateComment: async (req, res) => {
    try {
      const { recordId } = req.params;
      const { text } = req.body;
      const baseId = await airtableService.ensureBaseExists();

      const result = await airtableService.updateRecord(
        baseId,
        process.env.COMMENT_TABLE_NAME,
        recordId,
        { Text: text }
      );

      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteComment: async (req, res) => {
    try {
      const { recordId } = req.params;
      const baseId = await airtableService.ensureBaseExists();

      const result = await airtableService.deleteRecord(
        baseId,
        process.env.COMMENT_TABLE_NAME,
        recordId
      );

      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getCommentById: async (req, res) => {
    try {
      const { recordId } = req.params;
      const baseId = await airtableService.ensureBaseExists();

      const result = await airtableService.getRecordById(
        baseId,
        process.env.COMMENT_TABLE_NAME,
        recordId
      );

      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

export default airtableController;
