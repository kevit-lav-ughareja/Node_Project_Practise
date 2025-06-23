const http = require("https");
const express = require("express");
const path = require("path");

const app = express();

const server = http.createServer(app);

app.listen(9000, () => {
  console.log(`Server started at PORT:9000`);
});
