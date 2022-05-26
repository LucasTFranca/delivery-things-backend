const express = require('express');
const { registerProduct } = require('../controllers/productController');

const productRouter = express.Router();

productRouter.post('/', registerProduct);

module.exports = productRouter;
