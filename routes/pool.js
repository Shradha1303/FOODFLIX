var mysql = require('mysql');

var pool = mysql.createPool({
    host:'<HOSTNAME>',
    port:'<PORT_NO>',
    user:'<USERNAME>',
    password:'<PASSWORD>',
    database:'food_details',
    multipleStatements:true,
    connectionLimit:100
});

module.exports = pool;
