const express = require("express");
const app = express();
const peopleRouter = require("./routes/peopleRouter");
const authRouter = require("./routes/authRouter");

// static assets
app.use(express.static("./public"));

// parse form data
app.use(express.urlencoded({ extended: false }));

// parse json
app.use(express.json());

app.use("/api/people", peopleRouter);
app.use("/login", authRouter);

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
