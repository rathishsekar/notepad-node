const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tag',
  },
});

module.exports = mongoose.model('note', noteSchema);
