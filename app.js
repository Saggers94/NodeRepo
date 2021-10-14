// NODEJS WITH EXPRESS FRAMEWORK CODE
const express = require("express");

// Creating an express application and store it in a constant
// the express module will give us the high level function that has huge logic already available in it
// This "app" const is a valid function that can handle request and response which can be passed inside the createServer function
const app = express();

// here "next" is a function that will allow the middleware to run through the next
// middleware function
// app.use((req, res, next) => {
//   console.log("In the Middleware!");
// next function will allow the request to travel through the next middleware
// if we don't call next the request dies, so we can't continue
// so, In the case of not using next we should give the response back
//   next();
// });

app.use("/", (req, res, next) => {
  console.log("This will always run!");
  next();
});

// "/add-product" path would need an identical match inorder to go into the middleware
// and give the response
app.use("/add-product", (req, res, next) => {
  console.log("In the Add Product Middleware!");
  res.send("<h1>Add Product!</h1>");
});

// the "use" function has many overloaded functions
// in the "use" function, we can pass path of the route which is optional
app.use("/", (req, res, next) => {
  console.log("In Another Middleware!");
  // Send function from express allows us to send response of type any.
  // Also, we can use any Vanilla NodejS functions like write() and end()
  // Send function will also set a default (header) content type to "text/Html"
  res.send("<h1>Hello From ExpressJs!</h1>");
});

// We can just relace the below code with app.listen(3000)
// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);

// ------NODEJS VANILLA CODE---------
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
// const http = require("http");

// the below routes constant would have the exported function from the route file
// const routes = require("./routes");
// console.log(routes);

// create server takes request listener as an argument
//the "Request Listener" is a function that executes with every incoming request
// function rqListener(req, res) {}

// This "CreateServer" does actually returns a server which we can store into the variable
// const server = http.createServer(routes.handler);

// server.listen(3000);
