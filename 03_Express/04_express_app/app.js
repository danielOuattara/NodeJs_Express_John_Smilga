const express = require("express");
const path = require("path");
const app = express();

// setup static and middleware: here allows to fetch any file in public/
// here: a static asset, hte server doesn't change anything there, it just serves them
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
