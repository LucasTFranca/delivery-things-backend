const knex = require('../database/config');

const productToUserInsert = async (productId, userId) => {
  await knex('users_products').insert({
    product_id: productId,
    user_id: userId,
  });
};

module.exports = productToUserInsert;
