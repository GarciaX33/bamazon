var mysql = require('mysql');
var inquirer = require('inquirer');
// mysql connection, creating object holding necessary info for mysql db
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.password,
    database: 'bamazon_db',
    port: 3306

});
// initializing mysql connection
connection.connect(function (error) {
    if (error) throw error;

});