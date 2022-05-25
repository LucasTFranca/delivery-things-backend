/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('products', (table) => {
  table.increments('id').primary();
  table.string('title').notNullable();
  table.decimal('value').notNullable();
  table.string('image').notNullable();
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('products');
