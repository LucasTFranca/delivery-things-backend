const { StatusCodes } = require('http-status-codes');
const { registerUserValidation } = require('../services/userService');
const { encrypt } = require('../utils/function/crypto');

const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const { iv, password: encryptedPassword } = encrypt(password);

    await registerUserValidation(name, email, encryptedPassword, iv);

    return res.status(StatusCodes.CREATED).json({ message: 'User created successfully' });
  } catch (error) {
    console.log(`USER REGISTER ${error}`);
    return next(error);
  }
};

module.exports = { registerUser };
