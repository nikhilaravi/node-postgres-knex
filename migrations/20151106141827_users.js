"use strict";
exports.up = function(knex, Promise) {

  return knex.schema.table('preferences', function(table){
    table.renameColumn('guid', 'user_guid')
  })
};

exports.down = function(knex, Promise) {
  console.log("No error");
};
