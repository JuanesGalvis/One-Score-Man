const { Router } = require('express')
const { SignUp, Login } = require('./controller') 
const { ValidateMiddlewre } = require('./store')

function UsuariosNetwork ( app ) {
    const Urouter = Router();

    Urouter.post('/register', ValidateMiddlewre(), async (req, res) => {
        SignUp(req, res);
    })

    Urouter.post('/login', ValidateMiddlewre(), async (req, res) => {
        Login(req, res);
    })

    return Urouter;
}

module.exports = UsuariosNetwork;