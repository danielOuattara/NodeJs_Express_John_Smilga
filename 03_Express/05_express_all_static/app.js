const express = require("express");
const path = require("path");

const app = express();

// setup static and middleware
app.use(express.static("./public"));

/* Below is Not Needed ! */

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })

/*
1- added index.html to static assets, then 
   sever will serve "index.html" by default 

2-SSR with Template Engines (Pug, EJS, ...) */

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000....");
});
