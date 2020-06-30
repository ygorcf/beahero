const connection = require('../database/connection')

module.exports = {
  /**
   * Metodo responsavel pela criacao do contexto da sessao, com o objetivo de
   * criar a sessao da ong.
   * @param {Object} request - Os dados da requisicao.
   * @param {Object} response - Os dados da resposta.
   */
  async create(requst, response) {
    const { id } = requst.body

    const ong = await connection('ongs')
      .where('id', id)
      .select('name')
      .first()

    if (!ong) {
      return response.status(400).json({ error: 'No ONG found with this ID' })
    } else {
      return response.json(ong)
    }
  }
}
