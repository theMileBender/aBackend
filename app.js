// Import the express lirbary
const express = require('express');

// Inititalizing router
const router = express.Router(); 

// Body parser
const bodyParser = require('body-parser');

// Create a new express application and use
// the express static middleware, to serve all files
// inside the public directory
const app = express();
app.use(express.static(__dirname + '/public'));

// Start the server on port 8080
app.listen(8080);
console.log("App listening on 8080");

app.use("/api/v1/", require('./routes/api/airquality'));