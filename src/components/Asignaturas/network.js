const { Router } = require('express')

function AsignaturasNetwork ( app ) {
    const Arouter = Router();

    Arouter.get('/', async (req, res) => {
        res.json({
            message: "Bienvenido a Asignaturas"
        })
    })

    return Arouter;
}

module.exports = AsignaturasNetwork;