
const express = require('express');
const router = express.Router();
const {
    getPeople,
    createPeople,
    createPeoplePostman,
    updatePeople,
    deletePeople
} = require('./../controllers/peopleController')


router.route('/').get(getPeople).post(createPeople);
router.route('/postman').post(createPeoplePostman);
router.route('/:id').put(updatePeople).delete(deletePeople);

module.exports = router;