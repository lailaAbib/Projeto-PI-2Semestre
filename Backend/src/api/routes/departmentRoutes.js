const express = require('express');

const router = express.Router();

const departmentControllers = require('../controllers/departmentControllers.js');


router.get('/', (req, res) => {
    return res.json('Rota rais encontrada');
})

router.get('/department', departmentControllers.index);
router.get('/department/:id', departmentControllers.show);
router.post('/department', departmentControllers.create);
router.put('/department/:codigo', departmentControllers.update);
router.delete('/department/:codigo', departmentControllers.delete);



module.exports = router;

