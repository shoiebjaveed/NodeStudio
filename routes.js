const fs = require("fs");

const requestHandler = (req, res) => {
  // console.log(req.url, req.method, req.headers);
  // console.log("shoieb");
  // process.exit(); stops the server
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    const readMessage = fs.readFileSync("message.txt", "UTF-8");
    res.write("<html>"); //helps in writing html in document
    res.write("<head><title>my first document</title></head>");
    res.write(
      `<body><p>${readMessage}</p><form action="/message" method="POST"><input type="text" name="message"</input><button type="submit">submit</button></form></body>`
    );
    res.write("</html>");
    return res.end(); //helps in exit the response;
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      // console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
      console.log(parsedBody);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
};


//three ways to export a function
//1
// module.exports = requestHandler;
//2
// module.exports = {
//     handler:  requestHandler
// } //helps to export the requesthandler function
//3
// module.exports.handler = requestHandler;
//we can omit the module and can write only exports

exports.handler = requestHandler;
exports.someText = "testing exports"
