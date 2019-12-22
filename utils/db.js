const knex = require("knex")
const config = require("../knexfile")

const db = knex(config.development)
modules.exports = db