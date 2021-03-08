const { Connect } = require('./store')
const env = require('../../../config');
const bcrypt = require('bcrypt')

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

module.exports = {
    SignUp
}