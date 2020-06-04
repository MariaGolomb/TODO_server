const { PORT } = require('./common/constants');
const app = require('./app');
const connectToDb = require('./bd/db.client');

connectToDb(() => {
  app.listen(PORT, () =>
    console.log(`App is running on http://localhost:${PORT}`)
  );
});
