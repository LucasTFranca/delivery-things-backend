const { StatusCodes } = require('http-status-codes');
const { registerProductValidation, getAllProductsValidation } = require('../services/productService');

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

const getAllProducts = async (req, res, next) => {
  try {
    const products = await getAllProductsValidation();

    return res.status(StatusCodes.OK).json(products);
  } catch (error) {
    console.log(`GET ALL PRODUCTS ${error}`);
    return next(error);
  }
};

const getImageInformation = async (req, res, next) => {
  try {
    return res.status(StatusCodes.OK).json({ image: req.file.filename });
  } catch (error) {
    console.log(`GET IMAGE INFORMATION ${error}`);
    return next(error);
  }
};

module.exports = { registerProduct, getAllProducts, getImageInformation };
