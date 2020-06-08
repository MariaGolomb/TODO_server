/* eslint-disable prettier/prettier */
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

const cardListSchema = new mongoose.Schema(
    {
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
