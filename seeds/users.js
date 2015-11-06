"use strict";

var mockUsers = require('../data/mockUsers.js');

exports.seed = function(knex, Promise) {

  return knex('users')
    .del()
    .then(function(){
      return knex('users').insert(mockUsers);
    });
};
