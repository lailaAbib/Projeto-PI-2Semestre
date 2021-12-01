const express = require('express');

const router = express.Router();

const deviceControllers = require('../controllers/deviceControllers.js');


router.get('/', (req, res) => {
    return res.json('Rota rais encontrada');
})

router.get('/device', deviceControllers.index);
router.get('/device/:id', deviceControllers.show);
router.post('/device', deviceControllers.create);
router.put('/device/:codigo', deviceControllers.update);
router.delete('/device/:codigo', deviceControllers.delete);



module.exports = router;

