// Import the express lirbary
const express = require('express');

// Create a new express application and use
// the express static middleware, to serve all files
// inside the public directory
const app = express();
app.use(express.static(__dirname + '/public'))

// Start the server on port 8080
app.listen(8080);
console.log("App listening on 8080");