const express = require('express');

const router = express.Router();

const errorController = require('../controllers/error')

router.get(errorController)

module.exports = router;
