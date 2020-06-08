/* eslint-disable prettier/prettier */

const mongoose = require('mongoose');
const columnSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            default: 'New Column'
        }
    },
    { versionKey: false }
);

const todoListSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            default: 'USER_ID'
        },
        columns: [columnSchema]
},
{ versionKey: false }
);

const TodoList = mongoose.model('TodoList', todoListSchema);

module.exports = TodoList;
