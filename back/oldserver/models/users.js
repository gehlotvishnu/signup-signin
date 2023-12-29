import connectionPool from "./utilities/dbconnection.js";

const getallusers = () => {
  connectionPool.query("SELECT * FROM `users`", function (err, rows, fields) {
    console.log(fields);
  });
};
