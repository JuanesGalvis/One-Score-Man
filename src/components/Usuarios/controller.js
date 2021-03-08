const { Connect } = require('./store')
const env = require('../../../config');
const bcrypt = require('bcrypt')
const JWT = require('jsonwebtoken')

async function SignUp(req, res) {

    const CreatedUser = await Connect().then(async (db) => {

        const user = {
            username: req.body.username,
        }

        const hashPassword = bcrypt.hashSync(req.body.password, 5);
        user.password = hashPassword

        console.log(user);

        return db.collection(env.COLL_U).insertOne(user)  
        .then((result) => { result.insertedId; });
    })

    res.json({
        message: 'Usuario creado correctamente',
        userCreated: CreatedUser
    })

}

async function Login(req, res) {

    let LoginResult = false;

    const LoginUser =  await Connect().then((db) => {

        return db.collection(env.COLL_U).find({ username: req.body.username }).toArray()
    })

    try {
        
        // Comparar contraseña con la encriptada
        LoginResult = bcrypt.compareSync(req.body.password, LoginUser[0].password)

        if (LoginResult) 
        {
            const Token = JWT.sign(LoginUser[0], env.SECRET);

            res.json({
                message: `BIENVENIDO ${req.body.username}`,
                JsonWebToken: Token
            })
        } else {
            res.json({
            message: `NO SE PUDO INICIAR SESIÓN`
            });
        }

    } catch (error) {
        
        LoginResult = false;
        console.log("Entro en false");
    
        res.json({
            message: `NO SE PUDO INICIAR SESIÓN`
        });
    }
}

module.exports = {
    SignUp,
    Login
}