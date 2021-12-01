const express = require('express');

const router = express.Router();

const usersControllers = require('../controllers/usersControllers.js');


router.get('/', (req, res) => {
    return res.json('Rota rais encontrada');
})

router.get('/users', usersControllers.index);
router.get('/users/:id', usersControllers.show);
router.get('/usersemail/:email', usersControllers.email);
router.post('/users', usersControllers.create);
router.put('/users/:codigo', usersControllers.update);
router.delete('/users/:codigo', usersControllers.delete);





module.exports = router;

