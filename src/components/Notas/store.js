const database = require('../../database/db')
const env = require('../../../config');
const joi = require('joi')
const boom = require('@hapi/boom')
const { ObjectId } = require('mongodb')

async function Connect() {
    return database()
}

/** ESQUEMAS  */
const Schema = joi.object({
    descripcion: joi.string().required(),
    valor: joi.number().required(),
    porcentaje: joi.number().required(),
    fecha: joi.date().required(),
    asignatura: joi.string().required()
})

function Validarschema (data) {
    const { error } = Schema.validate(data)
    return error;
}

function MiddlewareValidate () {
    return function (req, res, next) {
        const response = Validarschema({
            descripcion: req.body.descripcion ,
            valor: req.body.valor,
            porcentaje: req.body.porcentaje,
            fecha: new Date(),
            asignatura: req.params.asignatura
        })

        response ? next(boom.badRequest(response)) : next();
    }
}

module.exports = {
    Connect,
    MiddlewareValidate
};