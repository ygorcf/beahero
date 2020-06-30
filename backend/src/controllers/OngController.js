const connection = require('../database/connection')
const generateUniqueId = require('../utils/generateUniqueId')

module.exports = {
  /**
   * Metodo resposavel pelo index do contexto de ongs, com o objetivo de buscar
   * a lista de ongs.
   * @param {Object} request - Os dados da requisicao.
   * @param {Object} response - Os dados da resposta.
   */
  async index (request, response) {
    const ongs = await connection('ongs').select('*')

    return response.json(ongs)
  },

  /**
   * Metodo responsavel pela criacao do contexto de ong, com o objetivo de criar
   * uma nova ong.
   * @param {Object} request - Os dados da requisicao.
   * @param {Object} response - Os dados da resposta.
   */
  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body

    const id = generateUniqueId()

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    })

    return response.json({ id })
  }
}
