const http = require('http'); //importing core module of node

// const reqListener = (req, res) => {
// } this an example to create a request listner

const server = http.createServer((req, res) => { //
    // console.log(req.url, req.method, req.headers);
    // console.log("shoieb");
    // process.exit(); stops the server
    const url = req.url;
    res.setHeader('Content-Type', 'text/html'); //helps to set the header
    if(url === '/'){
        res.write('<html>'); //helps in writing html in document
        res.write('<head><title>my first document</title></head>');
        res.write('<body><h1>this is my first response</h1></body>');
        res.write('</html>');
        return res.end(); //helps in exit the response   
    }
    if(url === '/home'){
        res.write('<html>'); //helps in writing html in document
        res.write('<head><title>my first document</title></head>');
        res.write('<body><h1>Welcome home</h1></body>');
        res.write('</html>');
        return res.end(); //helps in exit the response   
    }
    if(url === '/about'){
        res.write('<html>'); //helps in writing html in document
        res.write('<head><title>my first document</title></head>');
        res.write('<body><h1>Welcome to about us</h1></body>');
        res.write('</html>');
        return res.end(); //helps in exit the response   
    }
    if(url === '/node'){
        res.write('<html>'); //helps in writing html in document
        res.write('<head><title>my first document</title></head>');
        res.write('<body><h1>Welcome to my node js project</h1></body>');
        res.write('</html>');
        return res.end(); //helps in exit the response   
    }
});

server.listen(4000); //listens to the port we enter