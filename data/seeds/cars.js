
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {brand: 'Toyota', model: 'Camry', like:1},
        {brand: 'Chevy', model: 'Suburban', like:1},
        {brand: 'Honda',model: 'Civic', like:1}
      ]);
    });
};
