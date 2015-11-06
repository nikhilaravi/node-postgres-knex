'use strict';

var knex = require('../db.js');

knex('users').select('first_name').asCallback(function (err, row) {
  // console.log('Query result:', row);
});
