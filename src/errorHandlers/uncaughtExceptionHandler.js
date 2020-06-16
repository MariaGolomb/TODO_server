/* eslint-disable no-process-exit */
const writeLogs = require('./writeLogs');
const { UNCAUGHT_ERR_LOG_PATH } = require('../common/constants');

const fs = require('fs');

const uncaughtExceptionHandler = (error) => {
  const date = new Date();
  // eslint-disable-next-line no-sync
  fs.appendFileSync(
    UNCAUGHT_ERR_LOG_PATH,
    `
      =====================================
      ${date}: ${error}
    `
  );

  process.exit(1);
};

module.exports = uncaughtExceptionHandler;
