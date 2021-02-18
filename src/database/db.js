const { MongoClient, ObjectId } = require('mongodb');
const env = require('../../config');

const MONGO_URI = `mongodb+srv://${env.DB_USER}:${env.DB_PASSWORD}@cluster0.66hsi.mongodb.net/${env.DB_NAME}?retryWrites=true&w=majority`;

class Mongo {
    constructor () {
        const client = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        this.connect(client)
    }
    
    connect(client) {
        client.connect((err) => {
            if (err) {
                return err;
            }
            
            const User = client.db(env.DB_NAME).collection(env.COLL_U);
            const Asignaturas = client.db(env.DB_NAME).collection(env.COLL_A);
            const Notas = client.db(env.DB_NAME).collection(env.COLL_N);
        
            console.log("Base de datos conectada correctamente");
        });
    }
}

module.exports = Mongo;