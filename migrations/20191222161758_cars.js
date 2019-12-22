
exports.up = async function(knex) {
  await knex.schema.createTable("cars", (table) => {
      table.increments("id")
      table.text("model").notNull()
      table.text("vin").notNull().unique()
      table.text("make").notNull()
      table.integer("mileage").notNull()
      table.boolean("automatic").defaultTo(1)
      table.text("title")
  })
};

exports.down = function(knex) {
  
};
