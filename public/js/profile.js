// $(document).ready(function () {
//     // This file just does a GET request to figure out which user is logged in
//     // and updates the HTML on the page
//     $.get("/api/user_data").then(function (data) {
//         $(".member-name").text(data.email);
//     });
// });

const name = "Hello";


const query_url = `/api/user/${name}`;


$.get(query_url).then(function(result) {
    const data = result;
    console.log(data);
});