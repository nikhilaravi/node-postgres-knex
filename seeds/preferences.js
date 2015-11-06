"use strict";

var mockPreferences = require('../data/mockPreferences.js');

exports.seed = function(knex, Promise) {

  return knex('preferences')
    .del()
    .then(function(){
      return knex('preferences').insert(mockPreferences);
    });
};
