const express = require('express')
const app = express()
const env = require('./config')

app.use(express.json())

const router = require('./src/routes/router')
router(app);

app.listen( env.PORT , () => {
    console.log(`Servidor corriendo en el puerto: ${env.PORT}`);
})