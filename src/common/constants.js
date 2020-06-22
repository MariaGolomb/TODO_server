const path = require('path');

const PORT = 4000;
const MONGO_CONNECTION_STRING =
  'mongodb+srv://m001-student:m001-mongodb-basics@sandbox-c9cc3.mongodb.net/todoList?authSource=admin&replicaSet=Sandbox-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true';

const ERR_LOG_PATH = path.join(__dirname, '../logs/errors.log');
const UNCAUGHT_ERR_LOG_PATH = path.join(
  __dirname,
  '../logs/uncaught_errors.log'
);
const UNHANDLED_REJECTION_LOG_PATH = path.join(
  __dirname,
  '../logs/unhandled_rejections.log'
);

const LOG_REQ_PATH = path.join(__dirname, '../logs/req_log.js');

const JWT_SECRET_KEY = 'tratata';

module.exports = {
  PORT,
  MONGO_CONNECTION_STRING,
  ERR_LOG_PATH,
  UNCAUGHT_ERR_LOG_PATH,
  UNHANDLED_REJECTION_LOG_PATH,
  LOG_REQ_PATH,
  JWT_SECRET_KEY,
};
