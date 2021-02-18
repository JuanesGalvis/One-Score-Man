const { Router } = require('express')

function NotasNetwork ( app ) {
    const Nrouter = Router();

    Nrouter.get('/', async (req, res) => {
        res.json({
            message: "Bienvenido a Notas"
        })
    })

    return Nrouter;
}

module.exports = NotasNetwork;