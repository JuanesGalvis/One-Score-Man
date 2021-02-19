const { Router } = require('express')
const { Getnotas } = require('./controller')

function NotasNetwork ( app ) {
    const Nrouter = Router();

    Nrouter.get('/:asignatura', async (req, res) => {
        Getnotas(req, res)
    })

    return Nrouter;
}

module.exports = NotasNetwork;