const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></input></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  console.log(url);
  if (url === "/message" && method === "POST") {
    const body = [];
    // We register a listener that listens for the data event and we do it through "req.on()"
    // As the second argument we would have a function that will be executed when we would receive the stream
    // of data
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    // This function will be executed when we are done parsing the data. we can do it through 'end' event
    // we have to use "return" while registering the below event because if we don't than it will go ahead and
    // execute the code after that in which we are just giving the response without waiting for listener

    // Remember the event and its Listeners are "Async", so if we have a Syncronous code that could potentially
    // cause an error when the registered listeners run is not optimal.
    return req.on("end", () => {
      // Through buffer we can read the data that is coming in streams
      const parsedBody = Buffer.concat(body).toString();
      //   console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      // when we use "WriteFileSync" the syncronous-function option for the writing in file than the execution will be blocked
      // until the creation of the file get done which is not ideal.

      // but we can use "WriteFile" function that takes a function as an argument which would be executed after the
      // execution of creation of file and writing the input inside it.
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
    // fs.writeFileSync("message.txt", "DUMMY");

    // res.writeHead(302, {});
  }
  //   console.log(req.url, req.method, req.headers);
  // process.exit();
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello From my Node JS Code.</h1></body>");
  res.write("</html>");
  res.end();
  // Never write after you use "end()" function
  // res.write();
};

// Multiple exports in a single file
// ONe way
// module.exports = { handler: requestHandler, sometext: "Hard Text" };
// Second way
module.exports.handler = requestHandler;
module.exports.someText = "Hard Text";

//third way : 'shortcuts available from thnode js'
// exports.handler = requestHandler;
// exports.someText = "Hard Text";
