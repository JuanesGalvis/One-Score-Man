const { Router } = require('express')

function UsuariosNetwork ( app ) {
    const Urouter = Router();

    Urouter.get('/', async (req, res) => {
        res.json({
            message: "Bienvenido a Usuarios"
        })
    })

    return Urouter;
}

module.exports = UsuariosNetwork;