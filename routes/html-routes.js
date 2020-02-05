// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

const main_layout = require("../public/views/layouts/main_layout");
// const all_lunches_view = require("./views/all_lunches_view");
const home_view = require("../public/views/home_view");
const profile_view = require("../public/views/profile_view");
const map_view = require("../public/views/map_view");
const signup_view = require("../public/views/signup_view");
const login_view = require("../public/views/login_view");
const invite_friends_view = require("../public/views/invite_friends_view");
// const monday_view = require("./views/monday_view");

module.exports = function (app) {

    app.get("/", function (req, res) {
        // If the user already has an account send them to the members pag
        // res.sendFile(path.join(__dirname, "../public/html/index.html"));
        if (req.user) {
            // res.redirect("/members");
            return res.send(main_layout(home_view(),"members", "Profile"));
        }
        res.send(main_layout(home_view(),"login", "Login"));
    });

    app.get("/signup", function (req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/members");
        }
        // res.sendFile(path.join(__dirname, "../public/html/signup.html"));
        res.send(main_layout(signup_view()));
    });

    app.get("/map", function (req, res) {
        // If the user already has an account send them to the members page
        // res.sendFile(path.join(__dirname, "../public/html/map.html"));
        if (req.user) {
            // res.redirect("/members");
            return res.send(main_layout(map_view(),"members", "Profile"));
        }
        res.send(main_layout(map_view(),"login", "Login"));
    });

    app.get("/invite-friends", function (req, res) {
        // If the user already has an account send them to the members page
        // res.sendFile(path.join(__dirname, "../public/html/invite_friends.html"));
        if (req.user) {
            // res.redirect("/members");
            return res.send(main_layout(invite_friends_view(),"members", "Profile"));
        }
        res.send(main_layout(invite_friends_view(),"login", "Login"));
    });

    app.get("/login", function (req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/members");
        }
        // res.sendFile(path.join(__dirname, "../public/html/login.html"));
        res.send(main_layout(login_view(),"login", "Login"));
    });

    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be redirected to the signup page
    app.get("/members", isAuthenticated, function (req, res) {
        // res.sendFile(path.join(__dirname, "../public/html/members.html"));
        res.send(main_layout(profile_view(),"logout", "Logout"));
    });

};
