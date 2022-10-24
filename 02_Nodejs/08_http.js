// const http = require("http");

// console.log("http = ", http);

// const server = http.createServer((req, res) => {
//   console.log(req);
//   res.write("Welcome to Node server");
//   res.end();
// });

// server.listen(5000, () => {
//   console.log("Listening on port 5000");
//   00;
// });

//---------------------------------------------------------

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end("Welcome to Nodejs");
  }

  if (req.url === "/about") {
    return res.end("About us !");
  }

  res.end(`
        <h1>Oops : page not found ! </h1>
        <a href="/"> Home</a>
    `);
});

server.listen(5000, () => {
  console.log("Listening on port 5000");
});
