const express = require('express')
const app = express()
const env = require('./config')
const MongoDB = require('./src/database/db')

app.use(express.json())

const router = require('./src/routes/router')
router(app);

const BaseDeDatos = new MongoDB()

app.listen( env.PORT , () => {
    console.log(`Servidor corriendo en el puerto: ${env.PORT}`);
})