// $(document).ready(function () {
//     const submitForm = $("form.signup");
//     const revAddress = $("#revAddress");
//     const revRating = $("#rating-input");
//     const revReview = $("#review-input");

//     submitForm.on("submit", function (event) {
//         event.preventDefault();
//         var userData = {
//             address: revAddress,
//             rating: revRating.val().trim(),
//             review: revReview.val(),
//             UserId: 1
//         };

//         submitReview(userData.address, userData.rating, userData.review, userData.UserId);
//         revAddress.val("");
//         revRating.val("");
//         revReview.val("");
//     });

//     function submitReview(address, rating, review, UserId) {
//         $.get("/api/user_data", function (req, res) {
//             if (!req.id) {
//                 window.location.replace("/login");
//             }
//         }).then(() => {
//             $.post("/api/reviews", {
//                 address: address,
//                 rating: rating,
//                 review: review,
//                 UserId: UserId
//             });

//         }).then(function () {
//         }).catch((handleLoginErr));



//     }

//     function handleLoginErr(err) {
//         $("#alert .msg").text(err.responseJSON);
//         $("#alert").fadeIn(500);
//         // res.redirect("/login");
//     }
// });
