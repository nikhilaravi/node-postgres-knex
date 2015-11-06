

exports.up = function(knex, Promise) {

  return knex.schema.table('users', function (table){

    table.renameColumn('name', 'first_name');
    table.string('last_name').notNullable();
  });
};

exports.down = function(knex, Promise) {

  return knex.schema.table('users', function (table){

    table.renameColumn('first_name', 'name');
    table.dropColumn('last_name');
  });
};
