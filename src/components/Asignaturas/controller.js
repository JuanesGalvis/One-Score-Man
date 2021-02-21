const { Connect } = require('./store')
const env = require('../../../config');
const { ObjectId } = require('mongodb')

async function GetAsignaturas(req, res) {

    const data = await Connect().then((db) => {
        return db.collection(env.COLL_A).find().toArray();
    })

    res.json({
        message: "Asignaturas:",
        datos: data
    })

}

async function InsertAsignatura ( req, res ) {
    const ID = await Connect().then((db) => {
        return db.collection(env.COLL_A).insertOne(req.body);
    }).then((result) => { result.insertedId; })

    res.json({
        id_created: ID,
        message: 'Asignatura creada con exito!'
    });
}

async function UpdateAsignatura( req, res ) {

    const ID = await Connect().then((db) => {
        return db.collection(env.COLL_A).findOneAndUpdate({ _id: ObjectId(req.params.id)}, { $set: req.body }, { upsert: true })
    }).then((result) => {
        result.insertedId || req.params.id;
      });
    
    res.json({
        data: ID,
        message: 'Asignatura actualizada con exito!'
    })
}

async function DeleteAsignatura(req, res) {
    const ID = await Connect().then((db) => {
        return db.collection(env.COLL_A).deleteOne({ _id: ObjectId(req.params.id)});
    }).then(() => {
        req.params.id;
      });
    
    res.json({
        data: ID,
        message: 'Asignatura eliminada con exito!'
    })
}

module.exports = { GetAsignaturas, InsertAsignatura, UpdateAsignatura, DeleteAsignatura };