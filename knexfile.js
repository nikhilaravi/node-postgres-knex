module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'knex',
    },
    migrations: {
      directory: './dev/migrations',
      tableName: 'testing_migrations',
    },
    seeds: {
      directory: './dev/seeds',
    }
  },
  test: {
    client: 'pg',
    connection: {
      database: 'knex',
    },
    migrations: {
      directory: './test/migrations',
      tableName: 'testing_migrations',
    },
    seeds: {
      directory: './test/seeds',
    }
  },
  staging: {
    client: 'pg',
    connection: {
      database: 'knex',
    },
    migrations: {
      directory: './staging/migrations',
      tableName: 'testing_migrations',
    },
    seeds: {
      directory: './staging/seeds',
    }
  },
  production: {
    client: 'pg',
    connection: {
      database: 'knex',
    },
    migrations: {
      directory: './staging/migrations',
      tableName: 'testing_migrations',
    },
    seeds: {
      directory: './staging/seeds',
    }
  },
};
