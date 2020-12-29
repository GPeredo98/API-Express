const mysql = require('mysql')
const { promisify } = require('util');
const { database } = require('./keys');

const db = mysql.createPool(database);

db.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('SE PERDIÓ LA CONEXIÓN A LA BASE DE DATOS')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('LA BASE DE DATOS TIENE MUCHAS CONEXIÓNES ACTIVAS');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('LA CONEXIÓN FUE RECHAZADA');
        }
    }

    if (connection) connection.release();
    console.log('BASE DE DATOS CONECTADA');
    return
})

promisify(db.query);

module.exports = db;