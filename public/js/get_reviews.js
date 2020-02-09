// $(document).ready(function () {
//     // This file just does a GET request to figure out which user is logged in
//     // and updates the HTML on the page
//     $.get("/api/user_data").then(function (data) {
//         $(".member-name").text(data.email);
//     });
// });


const address_header_h_e = $("#address_header_h");
const reviews_here_h = $("#reviews_here_h");
// const joined_l_e = $("#joined_l");
// const home_town_l_e = $("#home_town_l");
// const description_p_e = $("#description_p");
// const rev_date = $("#rev_date");
// const rev_address = $("#rev_address");
// const review_p = $("#review_p");
const reviews_r = $("#reviews_r");

// var params = new URLSearchParams(window.location.search.slice(1));

// const id = "1";
// const query_url = `/api/user/${id}`;

// Route for getting some data about our user to be used client side
// $.get("/api/user_data").then(function (result) {
//     const data = result;
//     print(data.id);
//     get_user_info(data.id);
// });
var pathArray = window.location.pathname.split("/");
// console.log(pathArray[2]);
let address = pathArray[2].split("%20").join(" ");



const get_user_info = address => {

    console.log(address);
    const query_url = `/api/reviews/${address}`;
    $.get(query_url).then(function (result) {
        const data = result;
        // console.log(data);
        update_profile(data, format_date_r(data));

    });
};

get_user_info(address);

const update_profile = (data, date_r) => {
    address_header_h_e.text(address);
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        reviews_here_h.attr("style", "display: none;");
        reviews_r.append(`<div class="reviews_d"><p>Date Created: ${date_r}</p>
        <p>Address: ${data[i].address}</p>
        <p>Rating: ${data[i].rating} / 5</p>
        <p>Review: ${data[i].review}</p></div>`);
        // reviews_r.append(`<p>Address: ${data.Reviews[i].address}</p>`);
        // reviews_r.append(`<p>Rating: ${data.Reviews[i].rating} / 5</p>`);
        // reviews_r.append(`<p>Review: ${data.Reviews[i].review}</p></div>`);
    }
};

// const format_date = data => {
//     const year = data.createdAt.slice(0, 4);
//     const month = data.createdAt.slice(5, 7);
//     const day = data.createdAt.slice(8, 10);
//     const date = `${month}/${day}/${year}`;
//     return date;
//     // print(date)
// };

const format_date_r = data => {
    for (let i = 0; i < data.length; i++) {
        const year_r = data[i].createdAt.slice(0, 4);
        const month_r = data[i].createdAt.slice(5, 7);
        const day_r = data[i].createdAt.slice(8, 10);
        const date_r = `${month_r}/${day_r}/${year_r}`;
        return date_r;
    }
};

// const print = x => console.log(x);


// var pathArray = window.location.pathname.split("/");
// // console.log(pathArray[2]);
// let address = pathArray[2].split("%20").join(" ");



// const get_user_info = address => {

//     console.log(address);
//     const query_url = `/api/reviews/${address}`;
//     $.get(query_url).then(function (result) {
//         const data = result;
//         // console.log(data);
//         update_profile(data, format_date_r(data));

//     });
// };

// get_user_info(address);

// const update_profile = (data, date_r) => {
//     address_header_h_e.text(address);
//     console.log(data);
//     for (let i = 0; i < data.length; i++) {
//         reviews_r.append(`<div class="reviews_d"><p>Date Created: ${date_r}</p>
//         <p>Address: ${data[i].address}</p>
//         <p>Rating: ${data[i].rating} / 5</p>
//         <p>Review: ${data[i].review}</p></div>`);
//         // reviews_r.append(`<p>Address: ${data.Reviews[i].address}</p>`);
//         // reviews_r.append(`<p>Rating: ${data.Reviews[i].rating} / 5</p>`);
//         // reviews_r.append(`<p>Review: ${data.Reviews[i].review}</p></div>`);
//     }
// };

// const format_date = data => {
//     const year = data.createdAt.slice(0, 4);
//     const month = data.createdAt.slice(5, 7);
//     const day = data.createdAt.slice(8, 10);
//     const date = `${month}/${day}/${year}`;
//     return date;
//     // print(date)
// };

// const format_date_r = data => {
//     for (let i = 0; i < data.Reviews.length; i++) {
//         const year_r = data[i].createdAt.slice(0, 4);
//         const month_r = data[i].createdAt.slice(5, 7);
//         const day_r = data[i].createdAt.slice(8, 10);
//         const date_r = `${month_r}/${day_r}/${year_r}`;
//         return date_r;
//     }
// };

// // const print = x => console.log(x);