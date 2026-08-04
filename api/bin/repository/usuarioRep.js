const usuario = require('../model/usuarioModel');

module.exports = {
    findAll: () => {
        return new Promise((resolve, reject) => {
            usuario.find({}, (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            })
        })
    },
    findById: (id) => {
        return new Promise((resolve, reject) => {
            usuario.findOne({ _id: id }, (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            })
        })
    },
    findUser: (body) => {
        return new Promise((resolve, reject) => {
            usuario.findOne({ ra: body.ra, senha: body.senha }, (err, result) => {
                if (err) {
                    return reject(err);
                }
                if (!result) {
                    return reject({
                        message: {
                            userMessage: "Usuário/Senha Inválido"
                        },
                        statusCode: 501
                    })
                }
                return resolve(result);
            })
        })
    },
    insert: (body) => {
        return new Promise((resolve, reject) => {
            usuario.create(body, (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            })
        })
    },
    update: (body) => {
        return new Promise((resolve, reject) => {
            usuario.update(body, (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            })
        })
    },
    delete: (id) => {
        return new Promise((resolve, reject) => {
            usuario.find({ _id: id }, (err, body) => {
                if (body.length == 0) {
                    err = new Error('Não foi encontrado');
                }
                if (err) {
                    return reject(err);
                }
                usuario.remove(body[0], (err, result) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(result);
                })
            })

        })
    }
}