const userService = require('../users/user.service');
const { checkPassword } = require('../../authentication/processPassword');

const checkUser = async (login, password) => {
  const user = await userService.getByLogin(login);
  if (!user) {
    return false;
  }
  return await checkPassword(password, user.password);
};

module.exports = { checkUser };
