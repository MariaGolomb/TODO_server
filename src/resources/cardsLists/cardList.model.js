/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');
const card = require('../card/сard.model');

const cardListSchema = new mongoose.Schema(
    {
        todoListId: {
            type: String,
            required: true
        },
        cards: [card.cardSchema]
    },
    { versionKey: false }
);

const CardList = mongoose.model('CardList', cardListSchema);

module.exports = CardList;
