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
    Descripcion: joi.string().required(),
    Valor: joi.number().required(),
    Porcentaje: joi.number().required(),
    Fecha: joi.date().required(),
    Asignatura: joi.string().required()
})

function Validarschema (data) {
    const { error } = Schema.validate(data)
    return error;
}

function MiddlewareValidate () {
    return function (req, res, next) {
        const response = Validarschema({
            Descripcion: req.body.Descripcion ,
            Valor: req.body.Valor,
            Porcentaje: req.body.Porcentaje,
            Fecha: new Date(),
            Asignatura: req.params.asignatura
        })

        response ? next(boom.badRequest(response)) : next();
    }
}

module.exports = {
    Connect,
    MiddlewareValidate
};