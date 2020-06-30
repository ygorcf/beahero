const knext = require('knex')
const configurations = require('../../knexfile')

const config = process.env.NODE_ENV === 'test'
  ? configurations.test
  : configurations.development

const connection = knext(config)

module.exports = connection
