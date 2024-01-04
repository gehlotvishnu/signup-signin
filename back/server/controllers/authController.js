const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userService = require("../models/userService.js");

class AuthController {
  static async login(req, res) {
    try {
      const username = req.body.username;
      const password = req.body.password;
      //const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

      //get user details by username
      const user = await userService.GetUserDetailsByUsername(username);
      if (user) {
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
          // Generate a JWT token
          const token = jwt.sign(
            { user_id: user.user_id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }
          );
          res.json({ token });
          return;
        }
      }
      res.status(401).json({ message: "Invalid username or password" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async signup(req, res) {
    try {
      //const { username, password, firstname, lastname, email, mobile } = req.body;
      let user = req.body;

      // Check if the user already exists
      const existingUser = await userService.GetUserDetailsByUsername(
        user.username
      );

      if (existingUser) {
        res.status(400).json({ message: "Username already exists" });
        return;
      }

      const hashedPassword = await bcrypt.hash(user.password, 10); // 10 is the salt rounds
      user.password = hashedPassword;
      // Create a new user with hashed password
      const { user_id, username } = await userService.CreateUser(user);

      /*// Generate a JWT token for the new user
      const token = jwt.sign(
        { userId: newUser.id, username: newUser.username },
        "your-secret-key",
        { expiresIn: "1h" }
      );*/
      //user created successfully
      res.json({ user_id, username });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

module.exports = AuthController;
