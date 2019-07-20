const router = require('express').Router();

// auth login
router.get('/google', (req,res) => {

    res.send('Logging with google');

});

//auth logout
router.get('/logout', (req, res) => {
    res.send('logging out');
});

module.exports = router;