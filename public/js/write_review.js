// import { User } from "../../models/user";
$(document).ready(function () {

    // const submitForm = $("form.signup");
    const submitForm = $("#submitBtn");
    const revAddress = $("#review_address");
    const revRating = $("#rating-input");
    const revReview = $("#review-input");
    const revUserId = $("#review_id");

    var pathArray = window.location.pathname.split("/");
    // console.log(pathArray[2]);
    let address = pathArray[2].split("%20").join(" ");

    // eslint-disable-next-line no-unused-vars
    $.get("/api/user_data", function (req, res) { 
        console.log(req.id);
        const user_id = req.id;
        revAddress.text("Address " + address);
        revUserId.text("User ID " + user_id);

        submitForm.on("click", function (event) {
            event.preventDefault();
            var userData = {
                address: address,
                rating: revRating.val().trim(),
                review: revReview.val(),
                UserId: user_id
            };
            submitReview(userData.address, userData.rating, userData.review, userData.UserId);
        });
        function submitReview(address, rating, review, UserId) {
            $.post("/api/reviews", {
                address: address,
                rating: rating,
                review: review,
                UserId: UserId
            })
                .then(function () {
                    window.location.replace("/profile");
                    // If there's an error, handle it by throwing up a bootstrap alert
                })
                .catch(handleLoginErr);
        }
        function handleLoginErr(err) {
            $("#alert .msg").text(err.responseJSON);
            $("#alert").fadeIn(500);
        }
    });
});