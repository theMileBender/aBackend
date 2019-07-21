const passport = require('passport');
const GooglePlusTokenStrategy = require('passport-google-plus-token');
const keys = require('./keys');



// Google Oauth strategy
passport.use('googleToken', new GooglePlusTokenStrategy({
    clientID: keys.google.clientID,
    clientSecret:keys.google.clientSecret
}, async (accessToken, refreshToken, profile, done) => {
    console.log('accessToken:', accessToken );
    console.log('refreshToken:',refreshToken );
    console.log('profile:',profile );
}));

