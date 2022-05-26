const { StatusCodes } = require('http-status-codes');
const { registerProductValidation } = require('../services/productService');

const registerProduct = async (req, res, next) => {
  try {
    const {
      title,
      description,
      value,
      image,
    } = req.body;

    const { authorization } = req.headers;

    await registerProductValidation(title, description, value, image, authorization);

    return res.status(StatusCodes.CREATED).json({ message: 'Product created successfully' });
  } catch (error) {
    console.log(`PRODUCT REGISTER ${error}`);
    return next(error);
  }
};

module.exports = { registerProduct };
