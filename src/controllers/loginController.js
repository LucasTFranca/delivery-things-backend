const { StatusCodes } = require('http-status-codes');
const loginUserValidation = require('../services/loginService');

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const token = await loginUserValidation(email, password);

    return res.status(StatusCodes.CREATED).json({ token });
  } catch (error) {
    console.log(`USER LOGIN ${error}`);
    return next(error);
  }
};

module.exports = loginUser;
