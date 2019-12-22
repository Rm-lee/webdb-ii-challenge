
exports.seed = async function(knex) {
 await knex("cars").truncate()
 await knex("cars").insert([
   {make:"chevy",model:"silverado", vin:"23029s0df20qisdlf",automatic:1, mileage:2500, title:"clean" }
 ])
};
