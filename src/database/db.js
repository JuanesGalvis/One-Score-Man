const { MongoClient, ObjectId } = require('mongodb');
const env = require('../../config');

const MONGO_URI = `mongodb+srv://${env.DB_USER}:${env.DB_PASSWORD}@cluster0.66hsi.mongodb.net/${env.DB_NAME}?retryWrites=true&w=majority`;

let ConnectExisted = false;
let Cliente;

async function MongoLib() {
    
    if (!ConnectExisted) {

        const client = await new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    
        Cliente = new Promise((resolve, reject) => {
    
            client.connect((err) => {
                if (err) {reject(err)}        
                console.log("Conexión agregada");
                resolve(client.db(env.DB_NAME));
            });
        }) 
        
        ConnectExisted = true;
        return Cliente;
    }
    
    console.log("Ya existía un cliente");
    return Cliente;
}

module.exports = MongoLib;