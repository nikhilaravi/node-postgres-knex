var knex = require("../db")
var mockUsers = require('../utils/mockUsers.js');

knex('users')
  .insert(mockUsers)
  .exec(function(err, rows) {
    if(err) {
      console.error("oh dear: " + err);
    } else {
      console.log("SUCCESSFULLY ADDED USERS");
    }
  });
