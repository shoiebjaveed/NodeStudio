const path = require('path');

const express = require('express');

const root = require('../util/path');

const router = express.Router();

router.get('/contact', (req, res, next) => {
  res.sendFile(path.join(root, 'views', 'contact.html'));
});

router.post('/sucess', (req, res, next) => {
    console.log(req.body);
    res.redirect('/sucess');
  });

router.get('/sucess', (req, res, next) => {
    res.sendFile(path.join(root, 'views', 'sucess.html'));
  });

module.exports = router;
