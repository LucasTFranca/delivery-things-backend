const express = require('express');
const sendImage = require('../controllers/imageController');

const imageRouter = express.Router();

imageRouter.get('/:name', sendImage);

module.exports = imageRouter;
