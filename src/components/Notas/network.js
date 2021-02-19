const { Router } = require('express')
const Controller = require('./controller')

function NotasNetwork ( app ) {
    const Nrouter = Router();

    Nrouter.get('/', async (req, res) => {
        Controller(req, res)
    })

    return Nrouter;
}

module.exports = NotasNetwork;