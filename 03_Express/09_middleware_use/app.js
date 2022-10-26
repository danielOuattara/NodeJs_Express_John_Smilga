const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

/*logger middleware active for every routes 
---------------------------------------------*/
// app.use(logger); /* single middleware */
// app.use([logger, authorize]); /* multiple middlewares */

/* logger middleware active for '/api' route and any other route inside '/api 
-------------------------------------------------------------------------------*/
// app.use("/api", logger);
app.use("/api", [logger, authorize]);

// api/home/about/products
app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/daniel", (req, res) => {
  res.send("Welcome Daniel !");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  // test for: /api/items?user=daniel
  console.log(req.user);
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
