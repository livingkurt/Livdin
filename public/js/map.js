
L.mapquest.key = "nkL6LFerG2cvr74dIKmAFOfVpGn5ACIZ";

const search_i_e = $("#search_i_map");
const search_form_f_e = $("#search_form_f_map");


// console.log(search_result);

const parse_address = (search_result) => {
    console.log(search_result);
    $.get(`/api/parse/${search_result}`).then(function (result) {
        const data = result;
        console.log(data.realtor);
        create_elements(data.realtor);
        // L.mapquest.map.off();
        // L.mapquest.geocoding().geocode(search_result, createMap);
        // console.log(data.chosenLocation.formattedAddress);
        const street = data.chosenLocation.street;
        const city = data.chosenLocation.city;
        const state = data.chosenLocation.state;
        const zipcode = data.chosenLocation.zipcode;
        console.log(street);
        console.log(city);
        console.log(state);
        console.log(zipcode);

    });
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
    // return [lat, lon];
    get_city_from_coord(lat, lon);
}

function get_city_from_coord(lat, lon) {
    var search_city = search_city;
    var queryURL = "https://nominatim.openstreetmap.org/reverse?format=json&lat=" + lat + "&lon=" + lon;
    // print(queryURL);

    $.ajax({ url: queryURL, method: "GET" }).then(function (response) {
        var city = response.address.city;
        var state = response.address.state;
        const search = city + " " +state;
        // console.log(search);
        parse_address(search);
        L.mapquest.geocoding().geocode(search, createMap);

    });
}

const create_elements = (data) => {
    const map_container_e = $("#search_box_results");
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

    map.addControl(L.mapquest.control());

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
        // var street = location.latitude;
        // var street = location.log;
        var street = location.street;
        var city = location.adminArea5;
        var state = location.adminArea3;
        popup.setContent(`${street}, ${city}, ${state} <p><a href="#ex1" rel="modal:open">Write Review</a></p> <p><a href="#ex1" rel="modal:open">Get Review</a></p>`);
    };


    L.popup({ closeButton: false })
        .setLatLng(latLng)
        .setContent(`${location.street}, ${location.adminArea5}, ${location.adminArea3} <p><a href="#ex1" rel="modal:open">Write Review</a></p> <p><a href="#ex1" rel="modal:open">Get Review</a></p>`)
        .openOn(map);


};

const search = () => {
    var pathArray = window.location.pathname.split("/");
    // console.log(pathArray[2]);
    let search_result = pathArray[2].split("%20").join(" ");
    
    if (search_result === "current_location") {
        getLocation();
        // L.mapquest.geocoding().geocode(search_result, createMap);
    }
    else {
        parse_address(search_result);
        L.mapquest.geocoding().geocode(search_result, createMap);
        // L.mapquest.geocoding().geocode(search_result, createMap);
    }
    return search_result;
};
search();


const get_search_result = () => {
    let search_result = search_i_e.val();
    console.log(search_result);
    // search_result = search_result.replace(/[^\w\s]/gi, "");
    window.open(`/map/${search_result}`, "_self");
    // parse_address(search_result);

};


search_form_f_e.on("submit", (event) => {
    event.preventDefault();
    get_search_result();
});



$(document).on("click", "#search_results", function() {
    // If you are on the meals.html page
    const address = $(this).attr("data-name");
    console.log(address);
    // L.popup().setLatLng(e.latlng).openOn(this);
    // L.mapquest.geocoding().reverse(address, generatePopupContent);


});
