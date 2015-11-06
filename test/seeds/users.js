
exports.seed = function(knex, Promise) {

  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(), 

    // Inserts seed entries
    knex('users').insert({first_name: 'Foo', last_name: 'Bar', date_of_birth: '1990-11-21'}),
    knex('users').insert({first_name: 'Zoo', last_name: 'Bar', date_of_birth: '1990-11-21'}),
    knex('users').insert({first_name: 'Zip', last_name: 'Gup', date_of_birth: '1990-11-21'})
  );
};
