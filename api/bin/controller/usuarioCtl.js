const usuarioRep = require('../repository/usuarioRep');

module.exports = (app) => {
    app.get("/usuario/", (req, res, next) => {
        usuarioRep.findAll()
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.get("/usuario/:id", (req, res, next) => {
        usuarioRep.findById(req.params.id)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.post("/usuario/login", (req, res, next) => {
        usuarioRep.findUser(req.body)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.post("/usuario/", (req, res, next) => {
        usuarioRep.insert(req.body)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.put("/usuario/", (req, res, next) => {
        usuarioRep.update(req.body)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.delete("/usuario/:id", (req, res, next) => {
        usuarioRep.delete(req.params.id)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })
}