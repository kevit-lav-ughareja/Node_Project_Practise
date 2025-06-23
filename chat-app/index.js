const http = require("http");
const express = require("express");
const path = require("path");

const app = express();
app.use(express.static(path.resolve("./public")));
const server = http.createServer(app);

app.get("/", (req, res) => {
  return res.sendFile(path.resolve("./public/index.html"));
});

server.listen(9000, () => {
  console.log(`Server started at PORT:9000`);
});
