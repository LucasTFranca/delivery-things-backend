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
      user: 'Seu-usuario-aqui',
      password: 'Sua-senha-aqui',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`,
    },
  },

};
