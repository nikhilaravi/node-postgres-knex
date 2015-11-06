
exports.up = function(knex, Promise) {
  return knex.schema.dropTable('notifications');
};

exports.down = function(knex, Promise) {

};
