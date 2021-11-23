
const express = require('express');
const router = express.Router();
const { people } = require('../data')


//-----------------------------------------------------------------------------------
router.get('/', (req, res) => {
  res.status(200).json({ success: true, people });
});

//-----------------------------------------------------------------------------------
router.post('/', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, msg: 'please provide name value' });
  }
  res.status(201).json({ success: true, name });
});

//-----------------------------------------------------------------------------------
router.post('/postman', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, msg: 'please provide name value' });
  }
  res.status(201).json({ success: true, data: [...people, name] });
})

//-----------------------------------------------------------------------------------
router.put('/:id', (req, res) => {
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
})

//-----------------------------------------------------------------------------------
router.delete('/:id', (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    return res.status(404).json({ success: false, msg: `no person with id ${req.params.id}`});
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
    )
    return res.status(200).json({ success: true, data: newPeople });
  })

  module.exports = router;