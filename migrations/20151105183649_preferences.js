
exports.up = function(knex, Promise) {

  return knex.schema.createTable('preferences', function(preferences){
    preferences.uuid('user_guid').notNullable().references('users.guid');
    preferences.json('selections').notNullable();
    preferences.integer('money_min').notNullable();
    preferences.integer('money_max').notNullable();
    preferences.integer('odds_min').notNullable();
    preferences.integer('odds_max').notNullable();
  })

};

exports.down = function(knex, Promise) {
  throw new Error("no revert")
};
