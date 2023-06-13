const path = require('path');


const root = require('../util/path');

exports.showError = (req, res, next) => {
    res.status(404).sendFile(path.join(root, 'views', 'Error.html'))
  }