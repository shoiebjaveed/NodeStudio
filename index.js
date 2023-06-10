// const http = require("http"); //importing core module of node --beacuse we are using app.listen() it is no longer require

const express = require('express'); //importing express
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}))

app.use('/add-user', (req, res) => {
    res.send('<form action="/user" method="POST"><input type="text" name="title" /><input type="number" name="age" /><button type="submit">submit</button></form>')
})

app.use('/user',(req, res) => {
    console.log(req.body);
    res.redirect('/');
})

app.use('/', (req, res) => {
    res.send('<h2>welcome to express</h2>')
})

app.listen(4000);
