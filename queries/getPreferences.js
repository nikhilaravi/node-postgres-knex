"use strict";

var knex = require('../db.js');

module.exports = function(userId){
  return knex.('preferences')
    .select('')
};
