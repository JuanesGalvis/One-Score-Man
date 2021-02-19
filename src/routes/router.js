const Usuarios = require('../components/Usuarios/network')
const Asignaturas = require('../components/Asignaturas/network')
const Notas = require('../components/Notas/network')

function RouterGeneral (app) {

    app.use('/api/users', Usuarios(app));
    app.use('/api/asignaturas', Asignaturas(app));
    app.use('/api/notas', Notas(app));
}

module.exports = RouterGeneral;