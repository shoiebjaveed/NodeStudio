const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contact');
const root = require('./util/path');
app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes)
app.use(express.static(path.join(root, "public")))

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'Error.html'));
});

app.listen(4000);
