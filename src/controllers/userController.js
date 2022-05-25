const { StatusCodes } = require('http-status-codes');
const { registerUserValidation, getUserValidation } = require('../services/userService');

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

const getUser = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    const { user } = await getUserValidation(authorization);

    return res.status(StatusCodes.OK).json(user);
  } catch (error) {
    console.log(`USER GET ${error}`);
    return next(error);
  }
};

module.exports = { registerUser, getUser };
