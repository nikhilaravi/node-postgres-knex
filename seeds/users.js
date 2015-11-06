"use strict";

var mockUsers = require('../data/mockUsers.js');
var mockPreferences = require('../data/mockPreferences.js');

exports.seed = function(knex, Promise) {
  return knex('preferences').del()
          .then(function(){
            return knex('users').del()
          })
          .then(function(){
            return knex('users').insert(mockUsers)
          })
          .then(function(){
            return knex('preferences').insert(mockPreferences)
          })
};
