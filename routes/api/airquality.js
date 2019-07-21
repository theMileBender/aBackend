const express = require('express');

const router = express.Router();

router.get('calculate', (req, res)=> {
 console.log("Hitting");
});

module.exports = router;