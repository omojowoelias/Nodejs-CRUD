
var mongoose = require('mongoose');
var User = require('../models/user');
var userController = require('./userController.js');

var userController = {};

userController.listUsers = function (req, res) {
    User.find((err, users) => {
        if (err) throw err;
        //res.send(users);
        res.render('../views/users/index', { empData: users });
    });
}

userController.getUserById = function (req, res) {
    User.findById(req.params.id, (err, user) => {
        if (err) throw err;
        // res.send(user);
        res.render('../views/users/show', { emp: user });
    });
}

userController.createUser = function (req, res) {
    res.render('../views/users/create.ejs');
}

/*userController.saveUser = function (req, res) {
    var user = new User(req.body);
    user.create(user, (err, user) => {
        if (err) throw err;
        console.log('User Saved Successfully to DB!!');
        // res.redirect("/users");
        res.redirect("/users/show/" + user._id);
    });
}
*/

userController.saveUser = function (req, res) {
    User.create(req.body, (err) => {
        if (err) throw err;
        res.send('User Saved Successfully to DB!!');
    });
}


userController.deleteUser = function (req, res) {
    User.findByIdAndRemove(req.params.id, (err) => {
        if (err) throw err;
        res.send('User Deleted Successfully from DB!!');
        //res.redirect("/users");
    })
}

/* userController.editUser = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) throw err;
        console.log(user);
        res.render("../views/users/edit", { emp: user });
    })
} */

userController.updateUser = function (req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, (err) => {
        if (err) throw err;
        res.send('User Updated Successfully to DB!!')
        //res.redirect("/users");
    })
}

module.exports = userController;