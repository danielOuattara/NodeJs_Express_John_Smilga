const express = require("express");
const morgan = require("morgan");
const app = express();
let { people } = require("./data");

// output the time for the server to send the response
app.use(morgan("tiny"));

// static assets
app.use(express.static("./public"));

// parse form data
app.use(express.urlencoded({ extended: false }));

// parse incoming json data
app.use(express.json());

//-----------------------------------------------------------------------------------

// Not necessary and not prioritary, see in ./public: index.html is prioritary

// app.get("/", (req, res) => {
//   return res.status(200).send("<h1>Welcome, home</h1>");
// });

//-----------------------------------------------------------------------------------
app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  people = [...people, { id: people.length + 1, name }];
  console.log("people = ", people);
  return res.status(201);
});

//-----------------------------------------------------------------------------------
app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  people = [...people, { id: people.length + 1, name }];
  console.log("people = ", people);
  res.status(201).json({ success: true, data: people });
});

//-----------------------------------------------------------------------------------
app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    people = [...people, { id: people.length + 1, name }];
    return res.status(201).redirect("index.html");
  }
  res.status(400).send("Please Provide Credentials");
});

//-----------------------------------------------------------------------------------
app.put("/api/people/:id", (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` });
  }

  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: `Please, provide a content to be updated` });
  }

  /* Useful ??? */
  // const newPeople = people.map((person) => {
  //   if (person.id === Number(req.params.id)) {
  //     person.name = name;
  //   }
  //   return person;
  // })
  person.name = name;
  res.status(200).json({ success: true, data: people });
});

//-----------------------------------------------------------------------------------
app.delete("/api/people/:id", (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${req.params.id}` });
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  );
  return res.status(200).json({ success: true, data: newPeople });
});

//-----------------------------------------------------------------------------------
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, people });
});

//----------------------------------------------------------------------------------
app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
