
exports.up = function(knex, Promise) {
  return knex.schema.table('notifications', function(notifications){
    notifications.string('user_id')
  })
};

exports.down = function(knex, Promise) {

};
