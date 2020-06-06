/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');
const uuid = require('uuid');

const userSchema = new mongoose.Schema(
  {
    login: {
      type: String,
      required: true,
      unique: true
    },

    password: {
      type: String,
      required: true
    }
  },
  { versionKey: false }
);

userSchema.statics.toResponse = (user) => {
  const { _id: id, login } = user;
  return { id, login };
};

const User = mongoose.model('User', userSchema);

module.exports = User;
