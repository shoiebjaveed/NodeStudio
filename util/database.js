// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: "localhost",
//     user: "root",
//     database: "node_connect",
//     password: "shoiebjaveed@7933"
// })

// module.exports = pool.promise();

const Sequelize = require('sequelize');

const sequelize = new Sequelize("node_connect", "root", "shoiebjaveed@7933", {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;