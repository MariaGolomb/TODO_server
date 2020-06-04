/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true
    },
    content: String,
    columnId: {
        type: String,
        required: true
    }
  },
  { versionKey: false }
);

const cardListSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
            required: true
        },
        todoListId: {
            type: String,
            required: true
        },
        cards: [cardSchema]
    },
    { versionKey: false }
);

const CardList = mongoose.model('CardList', cardListSchema);

module.exports = CardList;
