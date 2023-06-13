const express = require('express');

const contactController = require('../controllers/contact')


const router = express.Router();

router.get('/contact', contactController.getContact);

router.post('/sucess', contactController.postContact);

router.get('/sucess', contactController.onSucess);

module.exports = router;
