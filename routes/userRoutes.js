
var path = require('path');
var express = require('express')
var router = express.Router();

var User = require('../models/user');
var UserController = require('../controllers/userController');



// Access API URL: http://localhost:3000/users
router.get('/', UserController.listUsers);

// Access API Url: http://localhost:3000/users/show/6031e63dc479801ac48d71de
router.get('/show/:id', UserController.getUserById);

// Access API Url: http://localhost:3000/users/create
router.get('/create', UserController.createUser);

// Access API Url: http://localhost:3000/users/save
router.post('/save', function (req, res) {
    console.log(req.body);
    UserController.saveUser(req, res);
});

// Access API Url: http://localhost:3000/users/delete/6031e63dc479801ac48d71de
router.delete('/delete/:id', UserController.deleteUser);

/*router.get('/edit/:id', UserController.editUser);*/

// Access API Url: http://localhost:3000/users/update/6031e991e31f5455fc0db1cd
router.put('/update/:id', UserController.updateUser);

module.exports = router;