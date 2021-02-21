const { Router } = require('express')
const { Getnotas, Getnota, CrearNota, EditarNota, EliminarNota } = require('./controller')

const { MiddlewareValidate } = require('./store');

function NotasNetwork () {
    const Nrouter = Router();

    Nrouter.get('/:asignatura', async (req, res) => {
        Getnotas(req, res)
    })

    Nrouter.get('/:asignatura/:nota', async (req, res) => {
        Getnota(req, res)
    })

    Nrouter.post('/:asignatura/new', MiddlewareValidate(), async (req, res) => {
        CrearNota(req, res)
    })

    Nrouter.put('/:asignatura/:nota/edit', async (req, res) => {
        EditarNota(req, res)
    })

    Nrouter.delete('/:asignatura/:nota/delete', async (req, res) => {
        EliminarNota(req, res)
    })

    return Nrouter;
}

module.exports = NotasNetwork;