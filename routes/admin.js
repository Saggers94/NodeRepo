const express = require("express");

// Express Router
const router = express.Router();

// Router function from express works in the same way as "app" works so
// we can write "app.get" or "router.get" as in the below case.
// both of them are same

// "/add-product" path would need an identical match inorder to go into the middleware
// and give the response
router.get("/add-product", (req, res, next) => {
  //   console.log("In the Add Product Middleware!");
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></input></form>"
  );
});

// the "use" will work with all http requests
// for the get request we can use "app.get" which is basically use but for the get request
// for the post request we can use "app.post" which is basically use but for the post request

// WE also have  "delete, patch and put"

router.post("/product", (req, res, next) => {
  // Here we get the body but it is not parsed and that's why we need to
  // register a parser and we can do it in the beginning with the middleware
  console.log(req.body);
  // "redirect" will redirect the request to the provided path
  res.redirect("/");
});

module.exports = router;
