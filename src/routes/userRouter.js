const express = require('express');
const { registerUser, getUser } = require('../controllers/userController');

const userRouter = express.Router();

userRouter.get('/', getUser);

userRouter.post('/', registerUser);

module.exports = userRouter;
