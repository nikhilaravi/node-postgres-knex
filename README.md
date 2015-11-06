# node-postgres-knex

Testing out using knex with postgres

## Migrations

These are versions of your database schema. The migrations folder has version control so you can rollback to previous versions of the schema.

Key commands:
  - `knex migrate:make <name>`
  - `knex migrate:latest`
  - `knex migrate:rollback`
  - `knex migrate:currentVersion`

1. Create a migration file `knex migrate:make <name>`. The file has boilerplate `exports.up` and `exports.down` functions.

2. In the migration file, add an `up` function that creates a table. In subsequent migration files, the table can be modified.

  ``` js
  // create table
  knex.schema.createTable('my_table', function(table){
      table.string('firstname') // etc
  })

  // modify table e.g. renameColumn, dropColumn or any other valid SQL comman using knex.raw()
  knex.schema.table('my_table', function(table) {
    table.renameColumn('firstname', 'name');
  })
  ```
3.  Add a `down` function that undoes any changes you have made if you want to roll back to a previous schema


## Seeds

Use seed files to populate the database tables with data:

Key commands:
  - `knex seed:make <name>`
  - `knex seed:run`

1. Create a seed file using `knex seed:make <name>`. The file has a `exports.seed` function.

2. Add commands to insert data into a table e.g. `knex.schema.<nameoftable>.insert(data)`

## Queries
