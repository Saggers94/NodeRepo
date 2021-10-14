const path = require("path");

// "process" is one another var that is available throughout the nodejs
// "process.mainModule" will give the main module of the project, in this case it is "app"
// "process.mainModule.filename" will give the file name which in this case is an "app"
module.exports = path.dirname(process.mainModule.filename);
