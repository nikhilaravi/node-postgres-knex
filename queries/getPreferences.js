"use strict";

var knex = require('../db.js');

module.exports = function(userId){
  return knex('preferences')
    .select('preferences.*', 'users.guid')
    .join('users', {'preferences.user_guid': 'users.guid'})
    .exec(function(err, rows) {
      if (err) {
        console.log('Oh No', err);
      } else {
        console.log('User and preferences', rows)
      }
    });
};
