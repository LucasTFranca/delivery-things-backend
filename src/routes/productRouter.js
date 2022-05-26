const express = require('express');
const { registerProduct, getAllProducts } = require('../controllers/productController');

const productRouter = express.Router();

productRouter.post('/', registerProduct);

productRouter.get('/', getAllProducts);

module.exports = productRouter;
