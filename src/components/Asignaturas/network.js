const { Router } = require('express')

const { GetAsignaturas } = require('./controller')
const { InsertAsignatura } = require('./controller')
const { UpdateAsignatura } = require('./controller')
const { DeleteAsignatura } = require('./controller')

const { MiddlewareValidate } = require('./store')

function AsignaturasNetwork () {
    const Arouter = Router();

    Arouter.get('/', async (req, res) => {
        GetAsignaturas(req, res)
    })

    Arouter.post('/new', MiddlewareValidate() ,async (req, res) => {
        InsertAsignatura(req, res);
    })

    Arouter.put('/edit/:id', MiddlewareValidate() ,async (req, res) => {
        UpdateAsignatura(req, res);
    })

    Arouter.delete('/delete/:id', async (req, res) => {
        DeleteAsignatura(req, res);
    })

    return Arouter;
}

module.exports = AsignaturasNetwork;