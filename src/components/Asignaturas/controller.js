const store = require('./store')
const env = require('../../../config');

async function GetAsignaturas(req, res) {

    const data = await store().then((db) => {
        return db.collection(env.COLL_A).find().toArray();
    })

    res.json({
        message: "Hola desde el controlador de asignaturas",
        datos: data
    })

}

module.exports = GetAsignaturas;