const { userInsert } = require('../models/userModel');

const registerUserValidation = async (name, email, password, passwordIv) => {
  await userInsert(name, email, password, passwordIv);
};

module.exports = { registerUserValidation };
