exports.up = function(knex) {
    return knex.schema.createTable("cars", function(cars) {
        cars.increments();
        cars
            .string("brand", 128)
            .notNullable()
        cars
            .string("model", 128)
            .notNullable()
            .unique();
        cars.boolean("like").defaultTo(false);
    });
};
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars");
};