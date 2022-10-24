// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.write("Welcome to Node server");
//   res.end();
// });

// server.listen(5000, () => {
//   console.log("Listening on port 5000");
// });

// ================================================================

const http = require("http");

// using Event emitter API
const server = http.createServer();

// emit request event
// subscribe  / listen / respond

server.on("request", (req, res) => {
  res.end("Welcome to nodeJS");
});

server.listen(5000);
