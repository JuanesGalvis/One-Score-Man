const { Connect } = require('./store')
const env = require('../../../config');
const { ObjectId, Timestamp } = require('mongodb')

async function Getnotas(req, res) {

    const AsignID = req.params.asignatura;

    const data = await Connect().then((db) => {
        return db.collection(env.COLL_N).find({ asignatura: ObjectId(AsignID) }).toArray();
    })

    res.json({
        message: "NotaS:",
        datos: data
    })

}

async function Getnota (req, res) {

    const NotaID = req.params.nota;
    // const AsignaturaID = req.params.asignatura;

    const data = await Connect().then((db) => {
        return db.collection(env.COLL_N).find(
            { _id: ObjectId(NotaID) }
        ).toArray();
    })

    res.json({
        message: "Nota individual",
        datos: data
    })

}
async function CrearNota (req, res) {

    const NotaID = await Connect().then((db) => {
        return db.collection(env.COLL_N).insertOne({
            descripcion: req.body.descripcion ,
            valor: req.body.valor,
            porcentaje: req.body.porcentaje,
            fecha: new Date(),
            asignatura: ObjectId(req.params.asignatura)
        })
        .then((response) => {
            response.insertedId;
        })
    })

    res.json({
        id_created: NotaID,
        message: 'Nota creada con exito!'
    })

}
async function EditarNota (req, res) {
    const EditedID = await Connect().then((db) => {
        return db.collection(env.COLL_N).findOneAndUpdate(
            {
                _id: ObjectId(req.params.nota)
            },
            { $set: {
                descripcion: req.body.descripcion ,
                valor: req.body.valor,
                porcentaje: req.body.porcentaje,
            }}, { upsert: true }
        )
        .then((response) => {
            response.insertedId || req.params.nota;
        })
    })

    res.json({
        data: EditedID,
        message: 'Nota actualizada con exito!'
    })
}

async function EliminarNota (req, res) {
    const DeletedID = await Connect().then((db) => {
        return db.collection(env.COLL_N).deleteOne(
            {
                _id: ObjectId(req.params.nota)
            }
        )
        .then((response) => {
            response.insertedId || req.params.nota;
        })
    })

    res.json({
        data: DeletedID,
        message: 'Nota eliminada con exito!'
    })
}

module.exports = { Getnotas, Getnota, CrearNota, EditarNota, EliminarNota };