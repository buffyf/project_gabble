const express = require("express");
const signupRouter = express.Router();
const models = require("../models");

signupRouter.get("/", function (req, res) {
    res.render('signup');
});

signupRouter.post("/", function (req, res) {
    if (!req.body ||
        !req.body.username ||
        !req.body.password) {
        return res.redirect("/");
    }
    console.log(req.body);
    req.checkBody("username", "Username cannot be null.").notEmpty();
    req.checkBody("password", "password cannot be null.").notEmpty();
    req.checkBody("firstname", "first name cannot be null.").notEmpty();
    req.checkBody("lastname", "last name cannot be null.").notEmpty();
    req.checkBody("email", "email cannot be null.").notEmpty();

    var errors = req.validationErrors();

    if (errors) {
        console.log('errors: ', errors);
        return res.render('signup', { errors: errors, data: req.body });
    } else {
        var newUser = models.user.build(req.body);
        newUser
            .save()
            .then(function (savedUser) {
                res.redirect("/login");
            })
            .catch(function (err) {
                res.status(500).send(err);
            });
    }
});

module.exports = signupRouter;