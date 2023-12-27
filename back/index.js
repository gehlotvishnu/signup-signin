const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

app.post("/login", function (req, res) {
  let data = req.body;
  console.log(data);
});

const hostname = "192.168.29.191";
const port = 5001;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
