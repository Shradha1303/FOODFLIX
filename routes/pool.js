var mysql = require('mysql');

var pool = mysql.createPool({
    host:'localhost',
    port:3306,
    user:'root',
    password:'1114',
    database:'food_details',
    multipleStatements:true,
    connectionLimit:100
});

module.exports = pool;