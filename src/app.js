const express = require('express');
const createError = require('http-errors');
const cors = require('cors');
const { createWriteStream } = require('fs');

const todoListRouter = require('./resources/todoLists/todoList.router');
const userRouter = require('./resources/users/user.router');
const errorHandler = require('./errorHandlers/errorHandler');
const morgan = require('./logging/logReq');
const { LOG_REQ_PATH } = require('./common/constants');
// const loginRouter = require('./resources/login/login.router');
// const { checkToken } = require('./authentication/processToken');

const app = express();

app.use(cors());

app.use(express.json());
app.use(
  morgan('[:date[clf]] :url :method :req[header] :body', {
    stream: createWriteStream(LOG_REQ_PATH, { flags: 'a' })
  })
);

// app.use(checkToken);

// app.use('/login', loginRouter);
app.use('/users', userRouter);
app.use('/list', todoListRouter);

app.use('**', (req, res, next) => {
  next(new createError.BadRequest());
});

app.use(errorHandler);

module.exports = app;
