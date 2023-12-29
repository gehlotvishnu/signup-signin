const http = require("http");
const https = require("https");
const express = require("express");
//const bodyParser = require("body-parser");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const helmet = require("helmet");
const cors = require("cors");

const app = express();
//const server = https.createServer(app);
const server = http.createServer(app);
//app.use(bodyParser.json());
app.use(express.json());

//import all the routers
//const userRouter = require("./server/routes/users.js");
const authRouter = require("./server/routes/authRouter");

app.use(cors());
app.use(helmet());

//app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

//app.post("/api/auth/login", function (req, res) {
//  let data = req.body;
//  console.log(data);
//});

//app.listen(port, () => {
//  console.log(`Server app listening on port ${port}`);
//});

server.listen(process.env.PORT || 6000, process.env.HOST || "localhost", () => {
  const address = server.address();
  console.log("Listening on: %j", address);
  console.log(" -> that probably means: http://localhost:%d", address.port);
});

module.exports = app;
