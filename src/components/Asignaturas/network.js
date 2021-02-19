const { Router } = require('express')
const Controller = require('./controller')

function AsignaturasNetwork ( app ) {
    const Arouter = Router();

    Arouter.get('/', async (req, res) => {
        Controller(req, res)
    })

    return Arouter;
}

module.exports = AsignaturasNetwork;