const { StatusCodes } = require('http-status-codes');
const { userInsert } = require('../models/userModel');
const { userSchema } = require('../utils/joiSchemas');
const errorContructor = require('../utils/function/errorHandler');
const { encrypt } = require('../utils/function/crypto');

const registerUserValidation = async (name, email, password) => {
  const { error } = userSchema.validate({
    name, email, password,
  });

  if (error) throw errorContructor(StatusCodes.BAD_REQUEST, error.message);

  const { iv, password: encryptedPassword } = encrypt(password);

  await userInsert(name, email, encryptedPassword, iv);
};

module.exports = { registerUserValidation };
