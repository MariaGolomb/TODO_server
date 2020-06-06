const User = require('./user.model');

const createUser = async (params) => {
  return User.create(params);
};

const getAll = async () => {
  return User.find({}).exec();
};

const getByLogin = async (login) => {
  return User.findOne({ login });
};

const updateUser = async (login, params) => {
  return User.updateOne({ login }, params).exec();
};

const deleteUser = async (login) => {
  return (await User.deleteOne({ login })).deletedCount === 1;
};

module.exports = { createUser, getAll, getByLogin, updateUser, deleteUser };
