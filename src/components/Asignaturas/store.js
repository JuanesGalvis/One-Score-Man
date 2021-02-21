const database = require('../../database/db')
const boom = require('@hapi/boom')
const env = require('../../../config');
const joi = require('joi');

async function Connect() {
    return database()
}

/** ESQUEMAS */
const Schema = joi.object({
  Nombre: joi.string().required(),
  Profesor: joi.string().required(),
  Descripcion: joi.string().required(),
  Contacto: joi.string().required(),
  Creditos: joi.number().required(),
  Web: joi.string(),
  Semestre: joi.string().required(),
})

function ValidarSchema(data) {
  const { error } = Schema.validate(data);
  return error;
}

function MiddlewareValidate () {
    return function (req, res, next) {
        const response = ValidarSchema(req.body);
        response ? next(boom.badRequest(response)): next();
    }
}

module.exports = {
    Connect,
    MiddlewareValidate
};