const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

// Getting the RootDirectory
// console.log(rootDir);

// Express Router
const router = express.Router();

const products = [];

// Router function from express works in the same way as "app" works so
// we can write "app.get" or "router.get" as in the below case.
// both of them are same

// "/add-product" path would need an identical match inorder to go into the middleware
// and give the response

// WE can use the same path if the methods we are using are different. Like in the below case we have
// get and post methods with the same path

// this route will be reached in the browser through "/admin/add-product" => GET
router.get("/add-product", (req, res, next) => {
  //   console.log("In the Add Product Middleware!");
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// Get, post and other http methods will make sure that we have the exact match with the request5h

// the "use" will work with all http requests
// for the get request we can use "app.get" which is basically use but for the get request
// for the post request we can use "app.post" which is basically use but for the post request

// WE also have  "delete, patch and put"

// This route will be reached with "/admin/add-product" => POST
router.post("/add-product", (req, res, next) => {
  // Here we get the body but it is not parsed and that's why we need to
  // register a parser and we can do it in the beginning with the middleware
  console.log(req.body);
  products.push({ title: req.body.title });
  // "redirect" will redirect the request to the provided path
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
// module.exports = router;
