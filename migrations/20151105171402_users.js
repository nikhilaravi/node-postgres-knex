
exports.up = function(knex, Promise) {

  return knex.schema.createTable('users', function(users) {
    users.uuid('guid').notNullable();
    users.string('title').notNullable();
    users.string('email').unique();
    users.string('mobile_number').notNullable();
    users.string('referral_code').nullable();
    users.string('username').notNullable();
    users.string('first_name').notNullable();
    users.string('last_name').notNullable();
    users.string('password').notNullable();
    users.date('date_of_birth').notNullable();
    users.boolean('ts_and_cs').notNullable();
    users.string('address').notNullable();
    users.string('postcode').notNullable();
    users.integer('pin').notNullable();
    users.string('access_token').notNullable();
    users.float('balance');
    users.boolean('use_touch_id').nullable();
    users.boolean('use_pin').nullable();
    users.boolean('offers_by_email').nullable();
    users.boolean('offers_by_sms').nullable();
    users.boolean('enable_push_notifications').nullable()
  })
};

exports.down = function(knex, Promise) {
  throw new Error("no revert")
};
