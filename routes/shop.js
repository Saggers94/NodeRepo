const express = require("express");
const path = require("path");

const router = express.Router();
const adminData = require("./admin");

// the "use" function has many overloaded functions
// in the "use" function, we can pass path of the route which is optional
router.get("/", (req, res, next) => {
  //   console.log("In Another Middleware!");
  // Send function from express allows us to send response of type any.
  // Also, we can use any Vanilla NodejS functions like write() and end()
  // Send function will also set a default (header) content type to "text/Html"
  // res.send("<h1>Hello Express!</h1>");
  // The below will not work as when we use "/", It looks for the Root Directory in the OS
  // So to solve this we have to use node core module "path"
  //   res.sendFile("/views/shop.html");

  // Once you have saved the data into the NodeJS, it will be served through all
  // of the servers you have running in all the browsers
  // console.log("shop.js", adminData.products);
  const products = adminData.products;

  // the "join" function on the path will join the segments
  // and "__dirname" is the constant name that yields the absolute path for the current directory
  //   Also, the "path.join" function works for the windows and linux, because it detects the OS that you are working with and yield the path accordingly
  // res.sendFile(path.join(__dirname, "../", "views", "shop.html"));

  // sending the html file with used engine "pug"
  // here we don't need to provide the path anymore as we have already defined that all views are in view folder
  // also, we have defined default templating engine "pug", so it will look for pug file in the views folder
  // render method allows us to pass the data that should be used in the view, in our case its a product
  res.render("shop", { prods: products, docTitle: "Shop" });
});

module.exports = router;
