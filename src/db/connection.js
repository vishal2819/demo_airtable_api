import config from '../config/index.js';
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

export default mongoose; 