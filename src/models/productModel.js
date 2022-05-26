const knex = require('../database/config');

const productInsert = async (title, description, value, image) => {
  const reponse = await knex('products').insert({
    title,
    description,
    value,
    image,
  });

  return reponse[0];
};

module.exports = { productInsert };
