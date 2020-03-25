const knext = require('knex')
const configurations = require('../../knexfile')

const connection = knext(configurations.development)

module.exports = connection
