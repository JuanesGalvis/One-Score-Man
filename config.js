/** CONFIGURACIÓN DE VARIABLES DE ENTORNO */
const env = require('dotenv')

env.config();

const { PORT, DB_PASSWORD, DB_USER, DB_NAME, COLL_U, COLL_A, COLL_N } = process.env;

module.exports = {
    PORT,
    DB_PASSWORD,
    DB_USER,
    DB_NAME,
    COLL_U,
    COLL_A,
    COLL_N
}