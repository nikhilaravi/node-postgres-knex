
exports.up = function(knex, Promise) {
  return knex.schema.table('notifications', function(table){
    table.dropColumn('user_id');
  })
};

exports.down = function(knex, Promise) {

};
