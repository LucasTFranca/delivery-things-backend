const { StatusCodes } = require('http-status-codes');
const { userInsert, findUserByEmail } = require('../models/userModel');
const { userSchema } = require('../utils/joiSchemas');
const errorContructor = require('../utils/function/errorHandler');
const { encrypt } = require('../utils/function/crypto');
const { decodeToken } = require('../utils/auth/jwt');

const registerUserValidation = async (name, email, password) => {
  const { error } = userSchema.validate({
    name, email, password,
  });

  if (error) throw errorContructor(StatusCodes.BAD_REQUEST, error.message);

  const { iv, password: encryptedPassword } = encrypt(password);

  await userInsert(name, email, encryptedPassword, iv);
};

const getUserValidation = async (authorization) => {
  const { email: userEmail } = decodeToken(authorization);

  if (!userEmail) throw errorContructor(StatusCodes.UNAUTHORIZED, 'Invalid token');

  const user = await findUserByEmail(userEmail);

  if (!user) throw errorContructor(StatusCodes.NOT_FOUND, 'User not found');

  return { name: user.name, email: user.email };
};

module.exports = { registerUserValidation, getUserValidation };
