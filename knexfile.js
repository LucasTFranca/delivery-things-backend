// Update with your config settings.

require('dotenv').config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host: process.env.HOST,
      port: 3306,
      database: 'coinsure',
      user: 'root',
      password: 'Trybe@1234',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`,
    },
  },

};
