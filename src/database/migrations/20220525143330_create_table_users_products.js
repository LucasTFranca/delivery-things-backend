/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('users_products', (table) => {
  table.integer('user_id')
    .unsigned()
    .index()
    .references('id')
    .inTable('users');
  table.integer('product_id')
    .unsigned()
    .index()
    .references('id')
    .inTable('products');
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('users_products');
