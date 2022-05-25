const { StatusCodes } = require('http-status-codes');
const { findUserByEmail } = require('../models/userModel');
const { createToken } = require('../utils/auth/jwt');
const { decrypt } = require('../utils/function/crypto');
const errorContructor = require('../utils/function/errorHandler');
const { loginSchema } = require('../utils/joiSchemas');

const loginUserValidation = async (email, password) => {
  const { error } = loginSchema.validate({
    email,
    password,
  });

  if (error) throw errorContructor(StatusCodes.BAD_REQUEST, error.message);

  const user = await findUserByEmail(email);

  if (!user) throw errorContructor(StatusCodes.NOT_FOUND, 'User not found');

  const encryption = { password: user.password, iv: user.password_iv };
  const decryptedPassword = decrypt(encryption);

  if (decryptedPassword !== password) throw errorContructor(StatusCodes.UNAUTHORIZED, 'Invalid password or email');

  const token = createToken({ email: user.email });
  return token;
};

module.exports = loginUserValidation;
