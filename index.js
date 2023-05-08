const http = require('http'); //importing core module of node
const fs = require('fs');

// const reqListener = (req, res) => {
// } this an example to create a request listner

const server = http.createServer((req, res) => { //
    // console.log(req.url, req.method, req.headers);
    // console.log("shoieb");
    // process.exit(); stops the server
    const url = req.url;
    const method = req.method;
    res.setHeader('Content-Type', 'text/html'); //helps to set the header
    if(url === '/'){
        res.write('<html>'); //helps in writing html in document
        res.write('<head><title>my first document</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"</input><button type="submit">submit</button></form></body>');
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
    if(url  === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            fs.writeFileSync('message.txt', message);
            console.log(parsedBody);
        });
         res.statusCode = 302;
         res.setHeader('Location', '/');
         return res.end();  

    }
});

server.listen(4000); //listens to the port we enter