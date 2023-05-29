const http = require("http"); //importing core module of node
const routes = require('./routes'); 

// const reqListener = (req, res) => {
// } this an example to create a request listner

const server = http.createServer(routes.handler);
console.log(routes.someText)

server.listen(4000); //listens to the port we enter
