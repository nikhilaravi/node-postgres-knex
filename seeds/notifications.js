"use strict"

var mockNotifications = require('./mockNotifications.js');

exports.seed = function(knex, Promise) {
  return knex.schema.notifications.insert(mockNotifications)
};
