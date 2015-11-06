# node-postgres-knex

Testing out using [knex](http://knexjs.org/) with postgres.

### CLI

Knex offers a Command Line Interface (CLI).

```
  $ knex --help
```

To have a better insight of the internal implementation look at: `node_modules/.bin/knex`. The CLI uses the knex API underneath.

### Config

The main config file is `knexfile.js`. Is possible to define many configuration object.

```js

module.exports = {
  development: { /* ... */ },
  production: { /* ... */ },
  staging: { /* ... */ },
  test: { /* ... */ },
};
```

Is possible to switch between them by setting `NODE_ENV=test`.


### Migrations


### Seed files

Seed files allow you to populate your database with test or seed data independent of your migration files.

### Debug

Is it possible to debug a specific query by adding:

```js
  knex('users')
  .select('first_name')
  .debug(true)
  .asCallback(function (err, row) { /* ... */);
```

This will output as stdout:

```
{ 
  method: 'select',
  options: {},
  bindings: [],
  sql: 'select "first_name" from "users"'
}
```

Another strategy is to add in the `knexfile.js`

```js
module.exports = {
  development: {
    // ...
    debug: process.env.PG_DEBUG || false,
    // ...
  }
}
```