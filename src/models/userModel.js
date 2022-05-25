const knex = require('../database/config');

const userInsert = async (name, email, password, passwordIv) => {
  await knex('users').insert({
    name,
    email,
    password,
    password_iv: passwordIv,
  });
};

module.exports = { userInsert };
