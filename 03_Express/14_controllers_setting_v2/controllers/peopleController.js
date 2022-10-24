const { people } = require("./../data");

//---------------------------------------------------------------------
exports.getPeople = (req, res) => {
  res.status(200).json({ success: true, people });
};

//---------------------------------------------------------------------
exports.createPeople = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res.status(201).json({ success: true, name });
};

//---------------------------------------------------------------------
exports.createPeoplePostman = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res.status(201).json({ success: true, data: [...people, name] });
};

//---------------------------------------------------------------------
exports.updatePeople = (req, res) => {
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
  person.name = name;
  res.status(200).json({ success: true, data: people });
};

//---------------------------------------------------------------------
exports.deletePeople = (req, res) => {
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
};

//---------------------------------------------------------------------
