const mongoose = require('mongoose');

const columnSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: 'New Column',
    },
  },
  { versionKey: false }
);

module.exports = { columnSchema };
