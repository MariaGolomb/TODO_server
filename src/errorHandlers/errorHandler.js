const writeLogs = require('./writeLogs');
const { ERR_LOG_PATH } = require('../common/constants');

const errorHandler = async (err, req, res, next) => {
  writeLogs(ERR_LOG_PATH, err);

  if (err.status) {
    return await res.status(err.status).send(err.message);
  }

  //  return await res.status(500).send('Internal server error');

  return await res.send(err);
};

module.exports = errorHandler;
