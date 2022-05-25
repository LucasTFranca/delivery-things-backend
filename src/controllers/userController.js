const { StatusCodes } = require('http-status-codes');
const { registerUserValidation } = require('../services/userService');

const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    await registerUserValidation(name, email, password);

    return res.status(StatusCodes.CREATED).json({ message: 'User created successfully' });
  } catch (error) {
    console.log(`USER REGISTER ${error}`);
    return next(error);
  }
};

module.exports = { registerUser };
