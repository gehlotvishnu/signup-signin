const express = require("express");
const { login } = require("../controllers/auth.js");

const authRouter = express.Router();
console.log("routes-auth.js");

authRouter.post("/login", login);

module.exports = authRouter;
