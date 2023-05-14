const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
  tagName: {
    type: String,
    required: true,
  },
  note: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'note',
  },
});

module.exports = mongoose.model('tag', tagSchema);
