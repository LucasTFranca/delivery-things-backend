const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(5).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(5).required(),
});

const productSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  value: Joi.number().required(),
  image: Joi.string().required(),
});

module.exports = { userSchema, loginSchema, productSchema };
