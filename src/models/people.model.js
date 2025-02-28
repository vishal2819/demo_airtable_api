import mongoose from '../db/connection.js';

const peopleSchema = new mongoose.Schema({
  airtableId: {
    type: String,
    required: true,
    unique: true
  },
  fields: {
    type: Object,
    required: true
  },
  lastSyncedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

export default mongoose.model('Person', peopleSchema); 