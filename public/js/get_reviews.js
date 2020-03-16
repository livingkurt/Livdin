
const address_header_h_e = $("#address_header_h");
const reviews_here_h = $("#reviews_here_h");
const reviews_r = $("#reviews_r");
let address = "";

var pathArray = window.location.pathname.split("/");
// console.log(pathArray[2]);
let search_result = pathArray[2].split("%20").join(" ").slice(0, -1);

$.get(`/api/parse/${search_result}`).then(function (result) {
  const data = result;
  // console.log(data)
  const street = data.street;
  const city = data.city;
  const state = data.state;
  const zipcode = data.zipcode;
  address = `${street}, ${city}, ${state} ${zipcode.slice(0, 5)}`
  // address = data.formattedAddress
  console.log(address)

  get_user_info(address);

});


const get_user_info = address => {
  // console.log("hello")
  url = address.split(' ').join('%20');
  console.log(address);
  console.log(url);
  $.get(`/api/reviews/${url}`).then(function (result) {
    const data = result;
    console.log("get_user_info")
    console.log(data)
    update_profile(data, format_date_r(data));

  });
};



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

const format_date_r = data => {
  for (let i = 0; i < data.length; i++) {
    const year_r = data[i].createdAt.slice(0, 4);
    const month_r = data[i].createdAt.slice(5, 7);
    const day_r = data[i].createdAt.slice(8, 10);
    const date_r = `${month_r}/${day_r}/${year_r}`;
    return date_r;
  }
};
