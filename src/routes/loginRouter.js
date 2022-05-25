const express = require('express');

const logindRouter = express.Router();

logindRouter.post('/', loginUser);

module.exports = logindRouter;
