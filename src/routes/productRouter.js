const express = require('express');
const { registerProduct, getAllProducts, getImageInformation } = require('../controllers/productController');
const upload = require('../middlewares/upload');

const productRouter = express.Router();

productRouter.post('/', registerProduct);

productRouter.post('/image', upload, getImageInformation);

productRouter.get('/', getAllProducts);

module.exports = productRouter;
