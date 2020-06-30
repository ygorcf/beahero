const crypto = require('crypto')

/**
 * Metodo para obter um id unico.
 * @returns {string} Um id unico.
 */
module.exports = function generateUniqueId () {
  return crypto.randomBytes(4).toString('HEX')
}
