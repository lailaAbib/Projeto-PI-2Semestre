const express = require('express');

const router = express.Router();

const AddressControllers = require('../controllers/AddressControllers.js');

router.get('/address', AddressControllers.index);
router.get('/address/:id', AddressControllers.show);
router.post('/address', AddressControllers.create);
router.put('/address/:codigo', AddressControllers.update);
router.delete('/address/:codigo', AddressControllers.delete);

module.exports = router;

