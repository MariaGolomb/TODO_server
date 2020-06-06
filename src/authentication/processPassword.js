const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
  return bcrypt.hash(password, 10);
};

const checkPassword = async (textPass, hashPass) => {
  return bcrypt.compare(textPass, hashPass);
};

module.exports = { hashPassword, checkPassword };
