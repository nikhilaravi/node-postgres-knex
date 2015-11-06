

exports.up = function(knex, Promise) {

  return knex.schema.table('users', function (table){

    table.dateTime('date_of_birth').notNullable();
  });  
};

exports.down = function(knex, Promise) {

  return knex.schema.table('users', function (table){

    table.dropColumn('date_of_birth');
  }); 
};
