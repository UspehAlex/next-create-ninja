const mongoose = require('mongoose');

const blockSchema = new mongoose.Schema({
  title: String,
  description: String,
  link: String,
  page: String
});

const Block = mongoose.model('Block', blockSchema);

module.exports = Block;
