/* eslint-disable prettier/prettier */
require('dotenv').config();
const mongoose = require('mongoose');

const connectToDb = async (serverListeningCB) => {
  try {
    mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        serverListeningCB();
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectToDb;
