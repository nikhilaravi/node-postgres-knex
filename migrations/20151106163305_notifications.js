
exports.up = function(knex, Promise) {
  return knex.schema.table('notifications', function(table){
    table.dropColumn('user_guid');
  })
};

exports.down = function(knex, Promise) {

};
