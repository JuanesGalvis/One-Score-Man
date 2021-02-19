const database = require('../../database/db')
const env = require('../../../config');

async function Connect() {
    return database()
}

module.exports = Connect;