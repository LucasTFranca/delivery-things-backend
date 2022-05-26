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

const productsFind = async () => {
  const products = await knex('products').select('*');

  return products;
};

const productFindByTitle = async (title) => {
  const response = knex('products').where('title', title).first();

  return response;
};

module.exports = { productInsert, productsFind, productFindByTitle };
