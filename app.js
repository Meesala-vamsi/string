let expressServer = require("express");

const server = expressServer();

server.get("/", (request, response) => {
  response.send("Express JS");
});

server.listen(3000);

module.exports = server;
