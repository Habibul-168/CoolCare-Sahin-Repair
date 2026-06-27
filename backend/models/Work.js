const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  problem: { type: String, required: true },
  solution: { type: String, required: true },
  category: { type: String, required: true },
  images: [{ type: String }],
  beforeImage: { type: String },
  afterImage: { type: String },
  location: { type: String },
  timeTaken: { type: String },
  featured: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Work', workSchema);
