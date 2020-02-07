// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {
    // Using the passport.authenticate middleware with our local strategy.
    // If the user has valid login credentials, send them to the members page.
    // Otherwise the user will be sent an error
    app.post("/api/login", passport.authenticate("local"), function (req, res) {
        res.json(req.user);
    });

    // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
    // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
    // otherwise send back an error
    app.post("/api/signup", function (req, res) {
        db.User.create({
            email: req.body.email,
            password: req.body.password,
            username: req.body.username,
            name: req.body.name,
            hometown: req.body.hometown,
            bio: req.body.bio
        })
            .then(function () {
                res.redirect(307, "/api/login");
            })
            .catch(function (err) {
                res.status(401).json(err);
            });
    });

    // Route for logging user out
    app.get("/logout", function (req, res) {
        req.logout();
        res.redirect("/");
    });

    // Route for getting some data about our user to be used client side
    app.get("/api/user_data", function (req, res) {
        if (!req.user) {
            // The user is not logged in, send back an empty object
            res.json({});
        } else {
            // Otherwise send back the user's email and id
            // Sending back a password, even a hashed password, isn't a good idea
            res.json({
                email: req.user.email,
                id: req.user.id
            });
        }
    });

    app.get("/api/parse/:search", function (req, res) {
        // var chosenLocation;
        // console.log(req.parmms.search)
        // console.log(req.params.search)
        const search_results = req.params.search;
        // console.log(req)
        require("dotenv").config();
        const NodeGeocoder = require("node-geocoder");

        const options = {
            provider: process.env.GEOCODER_PROVIDER,

            // Optional depending on the providers
            httpAdapter: "https", // Default
            apiKey: process.env.GEOCODER_API_KEY, // for Mapquest, OpenCage, Google Premier
            formatter: null // 'gpx', 'string', ...
        };


        const geocoder = NodeGeocoder(options);

        function getAddress(search_results) {
            geocoder.geocode(search_results)
                .then(function (data) {
                    // console.log(res);
                    //create an object that holds the user's inputed location
                    var chosenLocation = {

                        formattedAddress: data[0].formattedAddress,
                        longitude: data[0].longitude,
                        latitude: data[0].latitude,
                        street: data[0].streetName,
                        city: data[0].city,
                        state: data[0].stateCode,
                        zipcode: data[0].zipcode
                    };
                    // console.log(chosenLocation.formattedAddress);
                    res.json(chosenLocation);
                })
            
                // return parse
                .catch(function (err) {
                    console.log(err);
                });
        }
    
        getAddress(search_results);

        
    });
};
