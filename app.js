// Import the express lirbary
const express = require('express');

//Database
const mongoose = require('mongoose');

// Importing config
const config = require('./config/config');

//Connect to mongodb
mongoose.connect('mongodb://localhost/myapp');

mongoose.connection.once('open', function(){
    console.log("Connection has been made");
}).on('error', function(error) {
    console.log("Connection error");
})

const authRoutes = require('./routes/auth-routes/auth-routes');
const airQuality = require('./routes/api/airquality');

const passport = require('passport');

// Passport Setup
const passportSetup = require('./config/passport-setup'); 

// Body parser
const bodyParser = require('body-parser');

// Create a new express application and use
// the express static middleware, to serve all files
// inside the public directory
const app = express();



// Start the server on port 3000
app.listen(config.port);
console.log("App listening on" + config.port);

app.get("/home", function(res, res){
    console.log("Testing");
});

app.use(bodyParser.json());
app.use("/api/v1/", airQuality);
app.use("/oauth", authRoutes);