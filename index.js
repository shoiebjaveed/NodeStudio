// const http = require("http"); //importing core module of node --beacuse we are using app.listen() it is no longer require

const express = require('express'); //importing express

const app = express();

app.use((req, res, next) => {
    console.log("In middleware");
    next(); //Allows the request to continue to the next middleware in line
})

app.use((req, res, next) => {
    console.log("In second middleware");
    res.send("<h1>Hello from express</h1>")
})

// const reqListener = (req, res) => {
// } this an example to create a request listner

// const server = http.createServer(app);
// server.listen(4000); //listens to the port we enter
app.listen(4000);
