
L.mapquest.key = "nkL6LFerG2cvr74dIKmAFOfVpGn5ACIZ";

const search_i_e = $("#search_i_map");
const search_form_f_e = $("#search_form_f_map");
const checkbox = $("#slider_container_div_m")
const map_container_e = $("#search_box_results");
let search_result = "";
let new_address = "";

let on_off = 0;

const get_rentals = (search_result) => {
  // console.log(search_result.slice(0, -1));
  if (search_result.slice(-1) === '&') {
    checkbox.attr("style", "display: none");
  }


  // $.get(`/api/parse/${search_result}`).then(function (result) {
  //   // const data = result;
  //   // console.log(data)
  //   // create_elements(data.realtor);
  if (search_result.slice(-1) === 'X') {
    $.get(`/api/rentals/${search_result}`).then(function (result) {
      const data = result;
      // console.log(data)
      create_elements(data.realtor);
    });
  }

  // });

};

// Ask User if you can recieve location information
function getLocation() {
  // Make sure browser supports this feature
  if (navigator.geolocation) {
    // Provide our showPosition() function to getCurrentPosition
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  else {
    alert("Geolocation is not supported by this browser.");
  }
}

// This will get called after getCurrentPosition()
function showPosition(position) {
  // Grab coordinates from the given object
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  console.log("Your coordinates are Latitude: " + lat + " Longitude " + lon);
  const lat_long = `${lat}, ${lon}`
  // return [lat, lon];
  get_search_result(lat_long)
  // get_city_from_coord(lat, lon);
}

const create_elements = (data) => {


  data.listings.forEach(listing => {
    const search_results_e = $("<div>");


    const address_search_e = $("<p>");
    const square_foot_e = $("<p>");
    const bath_e = $("<p>");
    const div_d = $("<div>");
    const image_e = $("<img>");

    search_results_e.attr("id", "search_results");
    search_results_e.attr("data-name", listing.address);
    image_e.attr("id", "realtor_images");
    div_d.attr("id", "div_d");
    image_e.attr("src", listing.photo);
    address_search_e.attr("id", "address_search");
    square_foot_e.attr("id", "square_foot");
    bath_e.attr("id", "bath");
    address_search_e.text("Address " + listing.address);
    // rating_search_e.text("Rating " + listing.rank);
    square_foot_e.text("Sqft " + listing.sqft);
    bath_e.text("Beds " + listing.beds);

    div_d.append(address_search_e, square_foot_e, bath_e);
    search_results_e.append(div_d, image_e);
    map_container_e.append(search_results_e);
  });

};


//Function to create map
const createMap = (error, response) => {
  var location = response.results[0].locations[0];
  var latLng = location.displayLatLng;
  var map = L.mapquest.map("map", {
    center: latLng,
    layers: L.mapquest.tileLayer("map"),
    zoom: 18
  });

  map.addControl(L.mapquest.control({
    position: 'bottomleft'
  }));

  //create popup 
  var popup = L.popup();


  //Creates a reverse geo code per click
  map.on("click", function (e) {
    popup.setLatLng(e.latlng).openOn(this);
    L.mapquest.geocoding().reverse(e.latlng, generatePopupContent);
  });

  // generatePopupContent(error, response, popup);
  const generatePopupContent = (error, response) => {
    var location = response.results[0].locations[0];
    console.log(location)
    // var street = location.latitude;
    // var street = location.log;
    var street = location.street;

    var city = location.adminArea5;
    var state = location.adminArea3;
    var zipcode = location.postalCode.slice(0, 5);
    popup.setContent(`${street}, ${city}, ${state} ${zipcode} <p><a href="/write-review/${street}, ${city}, ${state} ${zipcode}" id="write_rev" >Write Review</a></p> <p><a href="/get-review/${street}, ${city}, ${state} ${zipcode}" >Get Review</a></p>`);
  };

  var pathArray = window.location.pathname.split("/");
  let search_result = pathArray[2].split("%20").join(" ");

  // var pathArray = window.location.pathname.split("/");
  // let search_result = pathArray[2].split("%20").join(" ");
  // console.log(parse_address(search_result));

  L.popup({ closeButton: false })
    .setLatLng(latLng)
    .setContent(`${location.street}, ${location.adminArea5}, ${location.adminArea3} <p><a href="/write-review/${search_result}" id="write_rev"  >Write Review</a></p> <p><a href="/get-review/${search_result}">Get Review</a></p>`)
    .openOn(map);
  // $.get(`/api/parse/${search_result}`).then(function (result) {
  //   const data = result;
  //   const street = data.street;
  //   const city = data.city;
  //   const state = data.state;
  //   const zipcode = data.zipcode;
  //   new_address = `${street}, ${city}, ${state} ${zipcode.slice(0, 5)}`
  //   L.popup({ closeButton: false })
  //     .setLatLng(latLng)
  //     .setContent(`${new_address} <p><a href="/write-review/${new_address}" id="write_rev"  >Write Review</a></p> <p><a href="/get-review/${new_address}">Get Review</a></p>`)
  //     .openOn(map);

  // })

};



const search = () => {
  var pathArray = window.location.pathname.split("/");
  // console.log(pathArray[2]);
  search_result = pathArray[2].split("%20").join(" ");
  console.log("search map.js")
  console.log(search_result)

  if (search_result === "current_location") {
    getLocation();
  }
  else {
    get_rentals(search_result);
    L.mapquest.geocoding().geocode(search_result.slice(0, -1), createMap);
  }
  return search_result;
};
search();

$(document).ready(function () {
  $('#checkbox').on('change', function () {
    var isChecked = $(this).is(':checked');
    if (isChecked) {
      // on_off = '#'
      map_container_e.attr("style", "display: block");
    } else {
      // on_off = '&'
      map_container_e.attr("style", "display: none");
    }
  });
});


const get_search_result = (search_result) => {
  // if(search_result)

  console.log(search_result);
  // search_result = search_result.replace(/[^\w\s]/gi, "");
  window.open(`/map/${search_result}`, "_self");
  // parse_address(search_result);

};



search_form_f_e.on("submit", (event) => {
  event.preventDefault();
  let search_result = search_i_e.val();
  get_search_result(search_result);
});



$(document).on("click", "#search_results", function () {
  // If you are on the meals.html page
  const address = $(this).attr("data-name");

  console.log(address);
  get_search_result(address)

  $(this);
  copyToClipboard(address);
  // L.popup().setLatLng(e.latlng).openOn(this);
  // L.mapquest.geocoding().reverse(address, generatePopupContent);


});


// });

function copyToClipboard(text) {
  // dummy.value = text;
  // dummy.select();
  var dummyContent = text;
  // eslint-disable-next-line no-unused-vars
  var dummy = $("<input>").val(dummyContent).appendTo("body").select();
  document.execCommand("copy");
}



















