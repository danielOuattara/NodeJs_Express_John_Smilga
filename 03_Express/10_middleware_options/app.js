const express = require("express");
const app = express();
const morgan = require("morgan");
const logger = require("./logger");
const authorize = require("./authorize");

//  req => middleware => res

// 1. use VS route
// 2. options - our own / express / 3rd party

// app.use([logger, authorize])

// middleware
// app.use(express.static('./public'))

// output the time for the server to send the response
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");SVGMarkerElementg()
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", [logger, authorize], (req, res) => {
  console.log(req.user);
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
