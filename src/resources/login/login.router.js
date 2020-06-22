const router = require('express').Router();
const { loginService } = require('./login.service');
const { createToken } = require('../../authentication/processToken');
router.route('/').post(async (req, res, next) => {
  try {
    const isCorrect = await loginService.checkUser(
      req.body.login,
      req.body.password
    );
    if (isCorrect) {
      return next();
    }
    res.status(403).send('Incorrect login or password');
  } catch (error) {
    return next(error);
  }
}, createToken());
