const database = require('../../database/db')
const boom = require('@hapi/boom')
const joi = require('joi');
const { func } = require('joi');

async function Connect() {
    return database()
}

/** ESQUEMA */
const Schema = joi.object({
    username: joi.string().required(),
    password: joi.string().required()
})

function ValidarSchema(data) {
    const { error } = Schema.validate(data);
    return error
}

function ValidateMiddlewre () {
    return (req, res, next) => {

        const response = ValidarSchema(req.body);
        response ? next(boom.badRequest(response)): next();
    }
    
}

module.exports = {
    Connect,
    ValidateMiddlewre
};