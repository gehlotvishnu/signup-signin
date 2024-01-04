const connectionPool = require("../utilities/dbconnection.js");

class UserService {
  static async GetUserDetailsByUsername(username) {
    try {
      const [rows, fields] = await connectionPool.query(
        "SELECT * FROM users where username=?",
        [username]
      );
      if (rows.length > 0) {
        return {
          user_id: rows[0].user_id,
          username: rows[0].username,
          password: rows[0].password,
          firstname: rows[0].firstname,
          lastname: rows[0].lastname,
          email: rows[0].email,
          mobile: rows[0].mobile,
        };
      }
      return;
    } catch (error) {
      console.error(error);
    }
  }

  static async GetUserDetailsByUserId(user_id) {
    try {
      const [rows, fields] = await connectionPool.query(
        "SELECT * FROM users where user_id=?",
        [user_id]
      );
      console.log(rows, fields);
      if (rows.length > 0) {
        return {
          user_id: rows[0].user_id,
          username: rows[0].username,
          password: rows[0].password,
          firstname: rows[0].firstname,
          lastname: rows[0].lastname,
          email: rows[0].email,
          mobile: rows[0].mobile,
        };
      }
      return;
    } catch (error) {
      console.error(error);
    }
  }

  static async CreateUser(user) {
    try {
      console.log(user);
      const [rows, fields] = await connectionPool.query(
        "INSERT into users(username,password,firstname,lastname,email,mobile)values(?,?,?,?,?,?)",
        [
          user.username,
          user.password,
          user.firstname,
          user.lastname,
          user.email,
          user.mobile,
        ]
      );
      if (rows.affectedRows > 0) {
        return {
          user_id: rows.insertId,
          username: user.username,
        };
      }
      return;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = UserService;

/*
const user = {
  username: "jai",
  password: "shree ram",
  firstname: "jai",
  lastname: "gehlot",
  email: "sggfhsg@gmail.com",
  mobile: "1234567890",
};
UserService.CreateUser(user);*/
