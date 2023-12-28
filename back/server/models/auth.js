const connectionPool = require("../utilities/dbconnection.js");

const loginmodel = () => {
  console.log("login-model");
  return new Promise(function (resolve, reject) {
    connectionPool.query("SELECT * FROM `users`", function (err, rows, fields) {
      console.log(fields);
      console.log(err);
      console.log(rows);
    });
  });
};

/*const getallusers = () => {
  connectionPool.query("SELECT * FROM `users`", function (err, rows, fields) {
    console.log(fields);
  });
};*/

/*//var connection = require("../lib/connection.js");
let Auth = function (params) {
  this.username = params.username;
  this.password = params.password;
};

Auth.prototype.login = function (newUser) {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) {
        throw error;
      }

      let values = [that.name, 1];

      connection.query(
        "Select AES_DECRYPT(`password`, 'secret') AS password, u.id, u.companyId, u.name as userName, c.name, u.organizationId, u.role, u.email, c.logo from user u left join company c on u.companyId = c.id where u.userId=? and u.isActive = ?",
        values,
        function (error, rows, fields) {
          if (!error) {
            resolve(rows);
          } else {
            console.log("Error...", error);
            reject(error);
          }

          connection.release();
          console.log("Process Complete %d", connection.threadId);
        }
      );
    });
  });
};*/

module.exports = { loginmodel };
