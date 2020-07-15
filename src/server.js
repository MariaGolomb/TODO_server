const { PORT } = require('./common/constants');
require('dotenv').config();
const app = require('./app');
const connectToDb = require('./bd/db.client');
const uncaughtExceptionHandler = require('./errorHandlers/uncaughtExceptionHandler');
const unhandledRejectionHandler = require('./errorHandlers/unhandledRejectionHandler');

connectToDb(() => {
  app.listen(process.env.PORT || PORT, () =>
    console.log(
      `App is running on http://localhost:${process.env.PORT || PORT}`
    )
  );
});

process.on('uncaughtException', uncaughtExceptionHandler);
process.on('unhandledRejection', unhandledRejectionHandler);
