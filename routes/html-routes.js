// Requiring path to so we can use relative routes to our HTML files

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

const main_layout = require("../public/views/layouts/main_layout");
const home_view = require("../public/views/home_view");
const profile_view = require("../public/views/profile_view");
const map_view = require("../public/views/map_view");
const signup_view = require("../public/views/signup_view");
const login_view = require("../public/views/login_view");
const invite_friends_view = require("../public/views/invite_friends_view");
const write_review_view = require("../public/views/write_review_view");
const get_review_view = require("../public/views/get_review_view");

module.exports = function (app) {

    app.get("/", function (req, res) {
        // If the user already has an account send them to the members pag
        if (req.user) {
            // res.redirect("/members");
            return res.send(main_layout(home_view(), "profile", "Profile"));
        }
        res.send(main_layout(home_view(), "login", "Login"));
    });

    app.get("/signup", function (req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/profile");
        }
        res.send(main_layout(signup_view(), "login", "Login"));
    });

    app.get("/map/:search?", function (req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            // res.redirect("/members");
            return res.send(main_layout(map_view(), "profile", "Profile"));
        }
        res.send(main_layout(map_view(), "login", "Login"));
    });
    

    app.get("/invite-friends", function (req, res) {
    // If the user already has an account send them to the members page
        if (req.user) {
            // res.redirect("/members");
            return res.send(main_layout(invite_friends_view(), "profile", "Profile"));
        }
        res.send(main_layout(invite_friends_view(), "login", "Login"));
    });

    app.get("/login", function (req, res) {

        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/profile");
        }
        res.send(main_layout(login_view(), "login", "Login"));
    });

    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be redirected to the signup page
    app.get("/profile", isAuthenticated, function (req, res) {
        res.send(main_layout(profile_view(), "logout", "Logout"));
    });

    app.get("/write-review/:address", function (req, res) {
        if (req.user) {
            return res.send(main_layout(write_review_view(), "profile", "Profile"));
        }
        
        res.send(main_layout(login_view(), "login", "Login"));
    });

    app.get("/get-review/:address", function (req, res) {
        if (req.user) {
            return res.send(main_layout(get_review_view(), "profile", "Profile"));
        }
        
        res.send(main_layout(get_review_view(), "login", "Login"));
    });

};


