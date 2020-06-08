/* eslint-disable prettier/prettier */
const usersRepo = require('./user.db.repository');
const { hashPassword } = require('../../authentication/processPassword');
const createError = require('http-errors');

const createUser = async (params) => {
      params.password = await hashPassword(params.password);
      const newUser = await usersRepo.createUser(params);
     if (newUser) {
        return newUser;
      }
    return false;
};

const getAll = async () => {
        return await usersRepo.getAll();
};

const getByLogin  = async (login) => {
        return await usersRepo.getByLogin(login);
};

const updateUser = async (login, params) => {
        params.password = await hashPassword(params.password);
        const user = await usersRepo.updateUser(login, params);
        if (!user) {
            throw createError(500, `Can't update user with login ${login}`);
          }
        return user;
};

const deleteUser = async (login) => {
        const isDeleted = await usersRepo.deleteUser(login);
        if (!isDeleted) {
            throw createError(500, `Can't delete user with login ${login}`);
        }
        return isDeleted;
};

module.exports = {
  createUser,
  getAll,
  getByLogin,
  updateUser,
  deleteUser
};
