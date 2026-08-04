var Schema = require('mongoose').Schema

module.exports = db.model('usuario', new Schema(
  {
    ra: { type: String, default: '', trim: true },
    nome: { type: String, default: '', trim: true },
    email: { type: String, default: '', trim: true },
    senha: { type: String, default: '', trim: true }
  }))
