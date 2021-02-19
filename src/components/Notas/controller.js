const store = require('./store')
const env = require('../../../config');
const { ObjectId } = require('mongodb')

async function Getnotas(req, res) {

    const AsignID = req.params.asignatura;

    const data = await store().then((db) => {
        return db.collection(env.COLL_N).find({ asignatura: ObjectId(AsignID) }).toArray();
    })

    res.json({
        message: "Hola desde el controlador de notas",
        datos: data
    })

}

module.exports = { Getnotas };