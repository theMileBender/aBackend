const router = require('express').Router();
const passport = require('passport');

router.route('/google')
.post(passport.authenticate('googleToken', { session: false}));

//auth logout
router.get('/logout', (req, res) => {
    res.send('logging out');
});

module.exports = router;