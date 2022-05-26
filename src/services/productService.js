const { StatusCodes } = require('http-status-codes');
const { productInsert, productsFind, productFindByTitle } = require('../models/productModel');
const productToUserInsert = require('../models/productToUser');
const { findUserByEmail } = require('../models/userModel');
const { decodeToken } = require('../utils/auth/jwt');
const errorContructor = require('../utils/function/errorHandler');
const { productSchema } = require('../utils/joiSchemas');

const registerProductValidation = async (title, description, value, image, authorization) => {
  const { email: userEmail } = decodeToken(authorization);

  if (!userEmail) throw errorContructor(StatusCodes.UNAUTHORIZED, 'Invalid token');

  const { error } = productSchema.validate({
    title, description, value, image,
  });

  if (error) throw errorContructor(StatusCodes.BAD_REQUEST, error.message);

  const product = await productFindByTitle(title);
  if (product) throw errorContructor(StatusCodes.BAD_REQUEST, 'Product already exists');

  const { id: userId } = await findUserByEmail(userEmail);

  const productId = await productInsert(title, description, value, image);

  await productToUserInsert(productId, userId);
};

const getAllProductsValidation = async () => {
  const products = await productsFind();

  return products;
};

module.exports = { registerProductValidation, getAllProductsValidation };
