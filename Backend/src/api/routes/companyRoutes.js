const express = require('express');

const router = express.Router();

const companyControllers = require('../controllers/companyControllers.js');


router.get('/', (req, res) => {
    return res.json('Rota rais encontrada');
})

router.get('/company', companyControllers.index);
router.get('/company/:id', companyControllers.show);
router.get('/companyemail/:email', companyControllers.email);
router.post('/company', companyControllers.create);
router.put('/company/:codigo', companyControllers.update);
router.delete('/company/:codigo', companyControllers.delete);



module.exports = router;

