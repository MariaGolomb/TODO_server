/* eslint-disable prettier/prettier */

const mongoose = require('mongoose');
const column = require('../column/column.model');

const todoListSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            default: 'USER_ID'
        },
        columns: [column.columnSchema]
},
{ versionKey: false }
);

const TodoList = mongoose.model('TodoList', todoListSchema);

module.exports = TodoList;
