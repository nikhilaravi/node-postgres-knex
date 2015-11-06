

exports.up = function(knex, Promise) {

  return knex.schema.createTable('users', function (table) {
    table.increments('id');
    table.string('name').notNullable();
  });
};

exports.down = function(knex, Promise) { throw new Error("no revert"); };
