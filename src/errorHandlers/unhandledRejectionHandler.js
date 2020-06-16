/* eslint-disable no-process-exit */
const writeLogs = require('./writeLogs');
const { UNHANDLED_REJECTION_LOG_PATH } = require('../common/constants');
const fs = require('fs');

const unhandledRejectionHandler = (reason) => {
  console.error(`Unhandled rejection detected: ${reason.message}`);
  // writeLogs(UNHANDLED_REJECTION_LOG_PATH, reason);
  // console.error(reason);
  const date = new Date();
  fs.appendFileSync(
    UNHANDLED_REJECTION_LOG_PATH,
    `
      =====================================
      ${date}: ${reason}
    `
  );
  process.exit(1);
};

module.exports = unhandledRejectionHandler;
