const mysql = require('mysql2');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

//import and configure dotenv:
require('dotenv').config()

//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//connect to database
const db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: process.env.password,
        database: 'election'
    },
    console.log('Connected to the election database.')
)

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});
db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});
//function that will start the Express.js server on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});