const mysql = require('mysql2');

//import and configure dotenv:
require('dotenv').config();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.password,
    database: 'election'
});

module.exports = db;