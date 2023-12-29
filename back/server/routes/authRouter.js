const express = require("express");
const { login, signup } = require("../controllers/authController.js");

const authRouter = express.Router();

authRouter.post("/login", login);
authRouter.post("/signup", signup);

module.exports = authRouter;
