const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: "localhost",
    user: "user1",
    password: "wQSceMt7MdzX",
    database: "db1"
})

//conn.connect();

module.exports = conn;