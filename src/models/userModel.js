const knex = require('../database/config');

const userInsert = async (name, email, password, passwordIv) => {
  await knex('users').insert({
    name,
    email,
    password,
    password_iv: passwordIv,
  });
};

const findUserByEmail = async (email) => {
  const user = await knex('users').where({ email }).first();

  return user;
};

module.exports = { userInsert, findUserByEmail };
