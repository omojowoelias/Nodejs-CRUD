
var express = require('express')
var router = express.Router();

// http://localhost:3000/users
router.get('/', (req, res) => {
    res.send('Employee Get Response Here..')
})

module.exports = router;