const express = require('express');

const router = express.Router();

const equipmentControllers = require('../controllers/equipmentControllers.js');


router.get('/', (req, res) => {
    return res.json('Rota rais encontrada');
})

router.get('/equipment', equipmentControllers.index);
router.get('/equipment/:id', equipmentControllers.show);
router.post('/equipment', equipmentControllers.create);
router.put('/equipment/:codigo', equipmentControllers.update);
router.delete('/equipment/:codigo', equipmentControllers.delete);



module.exports = router;

