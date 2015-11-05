module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'testing_postgres',
    },
    migrations: {
      tableName: 'testing_migrations'
    },
  }
};
