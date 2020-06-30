const connection = require('../database/connection')

module.exports = {
  /**
   * Metodo responsavel pelo index do contexto de perfil, com o objetivo de
   * pegar todos os incidentes de uma ong.
   * @param {Object} request - Os dados da requisicao.
   * @param {Object} response - Os dados da resposta.
   */
  async index (request, response) {
    const ong_id = request.headers.authorization

    const incidents = await connection('incidents')
      .where('ong_id', ong_id)
      .select('*')

    return response.json(incidents)
  }
}
