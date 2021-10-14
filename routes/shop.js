const express = require("express");

const router = express.Router();

// the "use" function has many overloaded functions
// in the "use" function, we can pass path of the route which is optional
router.get("/", (req, res, next) => {
  //   console.log("In Another Middleware!");
  // Send function from express allows us to send response of type any.
  // Also, we can use any Vanilla NodejS functions like write() and end()
  // Send function will also set a default (header) content type to "text/Html"
  res.send("<h1>Hello From ExpressJs!</h1>");
});

module.exports = router;
