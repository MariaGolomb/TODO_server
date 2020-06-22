const jwt = require('jsonwebtoken');
const createError = require('http-errors');
const { promisify } = require('util');

const { JWT_SECRET_KEY } = require('../common/constants');

const promisifyJwtVerify = promisify(jwt.verify);

const isIgnoreAuthPath = (path) => {
  const ignoreAuthPath = ['/', '/login'];

  if (path.length > 1 && path[path.length - 1] === '/') {
    path = path.slice(0, path.length - 1);
  }

  if (ignoreAuthPath.includes(path)) {
    return true;
  }
  return false;
};

const createToken = async (req, res, next) => {
  const payload = {
    login: req.body.login,
    password: req.body.password,
  };

  try {
    const token = await jwt.sign(payload, JWT_SECRET_KEY);
    res.status(200).json({ token });
  } catch (error) {
    return next(error);
  }
};

const checkToken = async (req, res, next) => {
  const { path } = req;

  if (isIgnoreAuthPath(path)) {
    return next();
  }

  const token = req.headers.authorization;

  if (token) {
    const [tokenType, tokenPayload] = token.split(' ');
    if (tokenType !== 'Bearer') {
      return next(createError.Unauthorized());
    }

    try {
      await promisifyJwtVerify(tokenPayload, JWT_SECRET_KEY);
      return next();
    } catch (error) {
      return next(createError.Unauthorized());
    }
  } else {
    return next(createError.Unauthorized());
  }
};

module.exports = { createToken, checkToken };
