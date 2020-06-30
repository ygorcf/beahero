/**
 * Metodo de comando executado quando vai executar a migration. Com o objetivo
 * de criar a tabela de ongs.
 * @param {Object} knex - A instancia do knex.
 */
exports.up = function(knex) {
  return knex.schema.createTable('ongs', table => {
    table.string('id').primary()
    table.string('name').notNullable()
    table.string('email').notNullable()
    table.string('whatsapp').notNullable()
    table.string('city').notNullable()
    table.string('uf', 2).notNullable()
  })
};

/**
 * Metodo de comando executado quando vai desfazer a migration. Com o objetivo
 * de dropar a tabela de ongs.
 * @param {Object} knex - A instancia do knex.
 */
exports.down = function(knex) {
  return knex.schema.dropTable('ongs')
};
