const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router
  .route('/')
  .post(async (req, res, next) => {
    try {
      const user = await usersService.createUser(req.body);
      await res.status(200).json(User.toResponse(user));
    } catch (error) {
      return next(error);
    }
  })
  .get(async (req, res, next) => {
    try {
      const users = await usersService.getAll();
      await res.status(200).json(users.map((user) => User.toResponse(user)));
    } catch (error) {
      return next(error);
    }
  });

router
  .route('/:login')
  .get(async (req, res, next) => {
    try {
      const user = await usersService.getByLogin(req.params.login);
      await res.status(200).json(User.toResponse(user));
    } catch (error) {
      return next(error);
    }
  })
  .put(async (req, res, next) => {
    try {
      const user = await usersService.updateUser(req.params.login, req.body);
      await res.status(200).json(User.toResponse(user));
    } catch (error) {
      return next(error);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const isDeleted = await usersService.deleteUser(req.params.login);
      if (isDeleted) {
        await res.status(200).send();
      }
    } catch (error) {
      return next(error);
    }
  });

module.exports = router;
