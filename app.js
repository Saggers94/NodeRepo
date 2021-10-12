// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     // console.log(req.url, req.method, req.headers);
//     // This will exit the server which we do not want
//     // process.exit();

//     const url = req.url;
//     const method = req.method;

//     if (url === '/') {
//         res.setHeader('Content-Type', 'text/html');
//         res.write('<html>');
//         res.write('<head><title>Enter Message</title>  </head>')
//         res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
//         res.write("</html>");
//         return res.end();
//     }

//     if (url === '/message' && method === "POST") {
//         const body = [];
//         req.on('data', (chunk) => {
//             console.log(chunk);
//             body.push(chunk);
//         });
//         return req.on('end', () => {
//             const parsedBody = Buffer.concat(body).toString();
//             const message = parsedBody.split('=')[1];
//             fs.writeFile('message.txt', message, (err) => {
//                 res.statusCode = 302;
//                 res.setHeader('Location', '/');
//                 return res.end();
//              })
//         });

//         // res.writeHead(302, {});
//     }

//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>My First Page</title>  </head>')
//     res.write('<body><h1>Hello, from my Node.js server</h1></body>')
//     res.write("</html>");
//     res.end();
// });

// server.listen(3000);

// ------------------------------
const http = require("http");

// the below routes constant would have the exported function from the route file
const routes = require("./routes");
console.log(routes);
// create server takes request listener as an argument
//the "Request Listener" is a function that executes with every incoming request
// function rqListener(req, res) {}

// This "CreateServer" does actually returns a server which we can store into the variable
const server = http.createServer(routes.handler);

server.listen(3000);
