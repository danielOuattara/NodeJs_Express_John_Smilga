
const { people } = require('./../data');

//--------------------------------------------------------------------------------
const getPeople = (req, res) => {
  res.status(200).json({ success: true, people });
}


//--------------------------------------------------------------------------------
const createPeople = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, msg: 'please provide name value' });
  }
  res.status(201).json({ success: true, name });
}

//--------------------------------------------------------------------------------
const createPeoplePostman = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, msg: 'please provide name value' });
  }
  res.status(201).json({ success: true, data: [...people, name] });
}

//--------------------------------------------------------------------------------
const updatePeople = (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    return res.status(404).json({ success: false, msg: `no person with id ${id}`});
  }
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, msg: `Please, provide a content to be updated`});
  }
  person.name = name;
  res.status(200).json({ success: true, data: people});
}

//--------------------------------------------------------------------------------
const deletePeople = (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    return res.status(404).json({ success: false, msg: `no person with id ${req.params.id}`});
  }
  const newPeople = people.filter((person) => person.id !== Number(req.params.id));
    return res.status(200).json({ success: true, data: newPeople });
  }
  
//--------------------------------------------------------------------------------
  
module.exports = {
    getPeople,
    createPeople,
    createPeoplePostman,
    updatePeople,
    deletePeople
}