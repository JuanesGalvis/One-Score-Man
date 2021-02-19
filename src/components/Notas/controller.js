const store = require('./store')
const env = require('../../../config');

async function Getnotas(req, res) {

    const data = await store().then((db) => {
        return db.collection(env.COLL_N).find().toArray();
    })

    res.json({
        message: "Hola desde el controlador de notas",
        datos: data
    })

}

module.exports = Getnotas;