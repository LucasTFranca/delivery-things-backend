const express = require('express');
const loginUser = require('../controllers/loginController');

const logindRouter = express.Router();

logindRouter.post('/', loginUser);

module.exports = logindRouter;
