$(document).ready(function () {
    const submitForm = $("form.signup");
    const revAddress = $("#revAddress");
    const revRating = $("#rating-input");
    const revReview = $("#review-input");

    submitForm.on("submit", function (event) {
        event.preventDefault();
        var userData = {
            address: revAddress,
            rating: revRating.val().trim(),
            review: revReview.val(),
            UserId: 1
        };

        submitReview(userData.address, userData.rating, userData.review, userData.UserId);
        revAddress.val("");
        revRating.val("");
        revReview.val("");
    });

    function submitReview(address, rating, review, UserId) {
        $.post("/api/reviews", {
            address: address,
            rating: rating,
            review: review,
            UserId: UserId
        })
            .then(function () {
                window.location.replace("/");
                // If there's an error, handle it by throwing up a bootstrap alert
            })
            .catch(handleLoginErr);
    }
    
    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
});