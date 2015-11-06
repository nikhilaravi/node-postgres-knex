"use strict";

exports.up = function(knex, Promise) {
  return knex.schema.createTable('notifications', function(notifications) {
    notifications.integer('notification_id').notNullable();
    notifications.string('message').notNullable();
    notifications.string('type').notNullable();
    notifications.json('body').notNullable();
    notifications.boolean('read').notNullable();
    notifications.string('user_id').references('guid').inTable('users').notNullable();
    notifications.timestamp('time_stamp').notNullable();
  })
};

exports.down = function(knex, Promise) {

};
