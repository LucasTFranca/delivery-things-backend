const express = require('express');
const imageRouter = require('./imageRouter');
const logindRouter = require('./loginRouter');
const productRouter = require('./productRouter');
const userRouter = require('./userRouter');

const router = express.Router();

router.use('/user', userRouter);

router.use('/login', logindRouter);

router.use('/product', productRouter);

router.use('/image', imageRouter);

module.exports = router;
