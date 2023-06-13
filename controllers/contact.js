const path = require('path');

const root = require('../util/path');

exports.getContact = (req, res, next) => {
    res.sendFile(path.join(root, 'views', 'contact.html'));
  }

exports.postContact = (req, res, next) => {
    console.log(req.body);
    res.redirect('/sucess');
  }

exports.onSucess = (req, res, next) => {
    res.sendFile(path.join(root, 'views', 'sucess.html'));
  }