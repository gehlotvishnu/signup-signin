const connectionPool = require("../utilities/dbconnection.js");
const bcrypt = require("bcrypt");

class UserService {
  static async GetUserDetailsByUsername(username) {
    try {
      const [rows, fields] = await connectionPool.query(
        "SELECT * FROM users where username=?",
        [username]
      );
      if (rows.length > 0) {
        return {
          user_id: rows["user_id"],
          username: rows["username"],
          password: rows["password"],
          firstname: rows["firstname"],
          lastname: rows["lastname"],
          email: rows["email"],
          mobile: rows["mobile"],
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
          user_id: rows["user_id"],
          username: rows["username"],
          password: rows["password"],
          firstname: rows["firstname"],
          lastname: rows["lastname"],
          email: rows["email"],
          mobile: rows["mobile"],
        };
      }
      return;
    } catch (error) {
      console.error(error);
    }
  }

  static async CreateUser(user) {
    try {
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
const user = {
  username: "jai",
  password: "shree ram",
  firstname: "jai",
  lastname: "gehlot",
  email: "sggfhsg@gmail.com",
  mobile: "1234567890",
};
UserService.CreateUser(user);
