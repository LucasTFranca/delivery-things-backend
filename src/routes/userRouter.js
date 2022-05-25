const express = require('express');

const userRouter = express.Router();

userRouter.get('/', getUser);

userRouter.post('/', registerUser);

module.exports = userRouter;
