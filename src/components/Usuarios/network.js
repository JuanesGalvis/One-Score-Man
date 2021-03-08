const { Router } = require('express')
const { SignUp } = require('./controller') 
const { ValidateMiddlewre } = require('./store')

function UsuariosNetwork ( app ) {
    const Urouter = Router();

    Urouter.post('/register', ValidateMiddlewre(), async (req, res) => {
        SignUp(req, res);
    })

    return Urouter;
}

module.exports = UsuariosNetwork;