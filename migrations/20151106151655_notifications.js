"use strict";

exports.up = function(knex, Promise) {

  return knex.schema.createTable('notifications', function(notifications) {
    notifications.integer('notification_id');
    notifications.string('message');
    notifications.string('type');
    notifications.json('body');
    notifications.boolean('read');
    notifications.string('user_guid');
    notifications.timestamp('time_stamp');
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('notifications');
};
