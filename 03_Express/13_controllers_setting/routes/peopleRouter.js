
const express = require('express');
const router = express.Router();
const {
    getPeople,
    createPeople,
    createPeoplePostman,
    updatePeople,
    deletePeople
} = require('./../controllers/peopleController')


/* Method 1
---------------- */

// router.get('/', getPeople );
// router.post('/', createPeople);
// router.post('/postman', createPeoplePostman);
// router.put('/:id', updatePeople);
// router.delete('/:id', deletePeople);

// module.exports = router;


/* Method 2 : chaining identical routes requests
-------------------------------------------------- */

router.route('/').get(getPeople).post(createPeople);
router.route('/postman').post(createPeoplePostman);
router.route(':/id').put(updatePeople).delete(deletePeople);


module.exports = router;