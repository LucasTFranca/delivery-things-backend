const express = require('express');
const logindRouter = require('./loginRouter');
const userRouter = require('./userRouter');

const router = express.Router();

router.use('/user', userRouter);
router.use('/user', logindRouter);

module.exports = router;
