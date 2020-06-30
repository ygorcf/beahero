/**
 * Metodo de comando executado quando vai executar a migration. Com o objetivo
 * de criar a tabela de incidentes.
 * @param {Object} knex - A instancia do knex.
 */
exports.up = function(knex) {
  return knex.schema.createTable('incidents', table => {
    table.increments()

    table.string('title').notNullable()
    table.string('description').notNullable()
    table.decimal('value').notNullable()

    table.string('ong_id').notNullable()

    table.foreign('ong_id').references('id').inTable('ongs')
  })
};

/**
 * Metodo de comando executado quando vai ser desfeita a migration. Com o
 * objetivo de dropar a tabela de incidentes.
 * @param {Object} knex - A instancia do knex.
 */
exports.down = function(knex) {
  return knex.schema.dropTable('incidents')
};


