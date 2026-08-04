require('./mongoInit');
let usuarioRepository = require('./bin/repository/usuarioRep')
usuarioRepository.insert({
    "nome": "Antonio",
    "ra": "45364437SP",
    "email": "2@1.com.br",
    "senha": "123"
}).then(q => {
    console.log(q);
}).catch(err => {
    console.log(err);
})
