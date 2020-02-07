// Requiring path to so we can use relative routes to our HTML files
// var path = require("path");

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
const axios = require("axios");
const fs = require("fs");
var parser = require("parse-address");
// const map_script_view = require("../public/views/map_script_view");
// const monday_view = require("./views/monday_view");

module.exports = function (app) {

    app.get("/", function (req, res) {
        // If the user already has an account send them to the members pag
        // res.sendFile(path.join(__dirname, "../public/html/index.html"));
        if (req.user) {
            // res.redirect("/members");
            return res.send(main_layout(home_view(), "members", "Profile"));
        }
        res.send(main_layout(home_view(), "login", "Login"));
    });

    app.get("/signup", function (req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/members");
        }
        // res.sendFile(path.join(__dirname, "../public/html/signup.html"));
        res.send(main_layout(signup_view(), "login", "Login"));
    });

    app.get("/map", function (req, res) {
        // If the user already has an account send them to the members page
        // res.sendFile(path.join(__dirname, "../public/html/map.html"));
        if (req.user) {
            // res.redirect("/members");
        }
        fs.readFile("log.txt", "utf8", function (error, addy) {
            console.log(addy);
            if (error) {
                return console.log(error);
            }
            console.log(addy);
            var parsed = parser.parseLocation(addy);
            console.log(parsed);
            axios({
                "method": "GET",
                "url": "https://realtor.p.rapidapi.com/properties/list-for-rent",
                "headers": {
                    "content-type": "application/json",
                    "x-rapidapi-host": "realtor.p.rapidapi.com",
                    "x-rapidapi-key": "ee6b62ee4amshafea3e45f16c03ap17677fjsn293316618b80"
                }, "params": {
                    "price_min": "1500",
                    "postal_code": parsed.zip,
                    "radius": "10",
                    "sort": "relevance",
                    "state_code": parsed.state,
                    "limit": "3",
                    "city": parsed.city,
                    "offset": "0"
                }
            })
                .then(response => {
                    //res.sendFile(path.join(__dirname, '../public/views/map_view.js'));
                    ///////////for loop start////////
                    // for (let i = 0; i < response.data.listings.length; i++) {
                    //     `<div class="overlay" id="search_results">
                    //         <p id="address_search" for="">Address: ${props.address}</p>
                    //         <p id="rating_search" for="">Price: ${props.price}</p>
                    //         <p id="review_search">Sqft: ${props.sqft} ft</p>
                    //         <p id="review_search">Beds/Bath: ${props.beds}/${props.baths} </p>
                    //         <img src=${props.photo}>
                    //     </div>`
                    // })
                    //////////for loop end..........
                    console.log(response);
                    res.send(main_layout(map_view(response.data.listings[0]), "members", "Profile"));
                })
                .catch(error => {
                    console.log(error);
                });
        });
    });

    app.get("/invite-friends", function (req, res) {
    // If the user already has an account send them to the members page
    // res.sendFile(path.join(__dirname, "../public/html/invite_friends.html"));
        if (req.user) {
        // res.redirect("/members");
            return res.send(main_layout(invite_friends_view(), "members", "Profile"));
        }
        res.send(main_layout(invite_friends_view(), "login", "Login"));
    });

    app.get("/login", function (req, res) {

        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/members");
        }
        // res.sendFile(path.join(__dirname, "../public/html/login.html"));
        res.send(main_layout(login_view(), "login", "Login"));
    });

    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be redirected to the signup page
    app.get("/members", isAuthenticated, function (req, res) {
    // res.sendFile(path.join(__dirname, "../public/html/members.html"));
        res.send(main_layout(profile_view(), "logout", "Logout"));
    });
                    
};
