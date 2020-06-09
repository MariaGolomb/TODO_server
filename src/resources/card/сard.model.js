const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema(
  {
    content: String,
    columnId: {
      type: String,
      required: true
    }
  },
  { versionKey: false }
);

module.exports = { cardSchema };
