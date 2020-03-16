const db = require("../models");

module.exports = function (app) {
  // API route to get all user profile data - including all reviews - for logged in user
  app.get("/api/user/:id", function (req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
        // need Review.user_id to equal logged in User.id
      },
      include: [db.Review]
    }).then(function (dbReviews) {
      res.json(dbReviews);
    });
  });

  app.get("/api/user/:email", function (req, res) {
    db.User.findOne({
      where: {
        email: req.params.email
        // need Review.user_id to equal logged in User.id
      },
      include: [db.Review]
    }).then(function (dbReviews) {
      res.json(dbReviews);
    });
  });

  // API route to get all reviews for certain address
  app.get("/api/reviews/:address", function (req, res) {
    // res.send("hello");
    console.log("review-api-routes")
    console.log(req.params.address)
    db.Review.findAll({
      where: {
        address: req.params.address
      }
    }).then(function (dbReviews) {
      console.log(dbReviews)
      res.json(dbReviews);
    });
  });

  // API route to post new review
  app.post("/api/reviews", function (req, res) {
    db.Review.create({
      address: req.body.address,
      rating: req.body.rating,
      review: req.body.review,
      UserId: req.body.UserId
      // This is probably not correct - need Review.user_id to equal logged in User.id
    }).then(function (dbReview) {
      res.json(dbReview);
    });
  });
};
