// This will be in some JSON config we'll say
/*const dbOptions = {
  host: "localhost",
  user: "root",
  password: "vkg3211",
  database: "socialmedia",
};*/
const dbOptions = {
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DBNAME,
};

//////////////////////////////////MYSQL LIB//////////////////////////////////////////////////////////////////////
/*
code: 'ER_NOT_SUPPORTED_AUTH_MODE',
  errno: 1251,
  sqlMessage: 'Client does not support authentication protocol requested by server; consider upgrading MySQL client',
  sqlState: '08004',
  fatal: true



mysql npm module still doesn't support caching_sha2_password authentication introduced in MySQL 8, while mysql2 npm module does. This is why i migrated to mysql2.

Solution : https://stackoverflow.com/questions/51147964/errno-1251-sqlmessage-client-does-not-support-authentication-protocol-reques

*/

/*
const MySQL = require("mysql");
// const config = require("../config/db.json");
let connectionPool = MySQL.createPool({
  host: dbOptions.host,
  user: dbOptions.user,
  password: dbOptions.password,
  port: dbOptions.port,
  database: dbOptions.database,
});

connectionPool.getConnection((err, connection) => {
  console.log(err);
  console.log(connection);
});
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////MYSQL2 LIB//////////////////////////////////////////////////////////////////////

const MySQL = require("mysql2");
let connectionPool = MySQL.createPool({
  host: dbOptions.host,
  user: dbOptions.user,
  password: dbOptions.password,
  port: dbOptions.port,
  database: dbOptions.database,
});

// For pool initialization, see above
//connectionPool.query("SELECT * FROM `users`", function (err, rows, fields) {
// Connection is automatically released when query resolves
//  console.log(fields);
//});

module.exports = connectionPool;
