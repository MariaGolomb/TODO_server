const { PORT } = require('./common/constants');
const app = require('./app');
const connectToDb = require('./bd/db.client');
const uncaughtExceptionHandler = require('./errorHandlers/uncaughtExceptionHandler');
const unhandledRejectionHandler = require('./errorHandlers/unhandledRejectionHandler');

connectToDb(() => {
  app.listen(PORT, () =>
    console.log(`App is running on http://localhost:${PORT}`)
  );
});

process.on('uncaughtException', uncaughtExceptionHandler);
process.on('unhandledRejection', unhandledRejectionHandler);
