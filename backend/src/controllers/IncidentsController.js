const connection = require('../database/connection')

module.exports = {
  /**
   * Metodo responsavel pelo contexto index dos incidentes, com o objetivo de buscar
   * a lista de incidentes.
   * @param {Object} request - Os dados da requisicao.
   * @param {Object} response - Os dados da resposta.
   */
  async index (request, response) {
    const { page = 1, limit = 5 } = request.query

    const [count] = await connection('incidents').count()

    const incidents = await connection('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(limit)
      .offset((page - 1) * limit)
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf'
      ])

    response.header('X-Total-Count', count['count(*)'])
    response.header('Access-Control-Expose-Headers', 'X-Total-Count')

    return response.json(incidents)
  },

  /**
   * Metodo responsabel pela rota de criacao do contexto de incidents, com o
   * objetivo de criar um novo incidente.
   * @param {Object} request - Os dados da requisicao.
   * @param {Object} response - Os dados da resposta.
   */
  async create (request, response) {
    const { title, description, value } = request.body
    const ong_id = request.headers.authorization

    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id
    })

    return response.json({ id })
  },

  /**
   * Metodo responsavel pela remocao do contexto de incidentes, com o objetivo
   * de deletar um incidente.
   * @param {Object} request - Os dados da requisicao.
   * @param {Object} response - Os dados da resposta.
   */
  async delete (request, response) {
    const { id } = request.params
    const ong_id = request.headers.authorization

    const incident = await connection('incidents')
      .where('id', id)
      .select('ong_id')
      .first()

    if (incident.ong_id !== ong_id) {
      return response.status(401).json({ error: 'Operation not permitted.' })
    } else {
      await connection('incidents')
        .where('id', id)
        .delete()

      return response.status(204).send()
    }
  }
}
