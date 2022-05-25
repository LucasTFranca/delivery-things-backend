const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_KEY;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = (payload) => jwt.sign(payload, secret, jwtConfig);

const decodeToken = (token) => {
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    return false;
  }
};

module.exports = {
  createToken,
  decodeToken,
};
