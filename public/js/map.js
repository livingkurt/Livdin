window.onload = function () {

    const search_i_e = $("#search_i_map");
    const search_form_f_e = $("#search_form_f_map");

    const get_search_result = () => {
        let search_result = search_i_e.val();
        // search_result = search_result.replace(/[^\w\s]/gi, "");
        // window.open(`/map/${search_result}`, "_self");
        parse_address(search_result);

    };


    //Initiate API key
    L.mapquest.key = "nkL6LFerG2cvr74dIKmAFOfVpGn5ACIZ";

    // const parse_address = search_result => {


    var pathArray = window.location.pathname.split("/");

    console.log(pathArray[2]);
    let search_result = pathArray[2].split("%20").join(" ");
    console.log(search_result);
    $.get(`/api/parse/${search_result}`).then(function(result) {
        const data = result;
        console.log(data.realtor);
        create_elements(data.realtor);
        console.log(data.chosenLocation.formattedAddress);
        const street = data.chosenLocation.street;
        const city = data.chosenLocation.city;
        const state = data.chosenLocation.state;
        const zipcode = data.chosenLocation.zipcode;
        console.log(street);
        console.log(city);
        console.log(state);
        console.log(zipcode);

    });
    // }

    const create_elements = (data) => {
        const map_container_e = $("#search_box_results");
        data.listings.forEach(listing => {
            const search_results_e = $("<div>");
            const address_search_e = $("<p>");
            // const rating_search_e = $("<p>");
            const square_foot_e = $("<p>");
            const bath_e = $("<p>");
            const image_e = $("<img>");
            search_results_e.attr("id", "search_results");
            image_e.attr("id", "realtor_images");
            image_e.attr("src", listing.photo);
            address_search_e.attr("id", "address_search");
            square_foot_e.attr("id", "square_foot");
            bath_e.attr("id", "bath");
            address_search_e.text("Address " + listing.address);
            // rating_search_e.text("Rating " + listing.rank);
            square_foot_e.text("Sqft " + listing.sqft);
            bath_e.text("Beds " + listing.beds);



            search_results_e.append(address_search_e, square_foot_e, bath_e, image_e);
            map_container_e.append(search_results_e);
        });
    };
    L.mapquest.geocoding().geocode(search_result, createMap);

    //Function to create map
    function createMap(error, response) {
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
        map.on("click", function(e) {
            popup.setLatLng(e.latlng).openOn(this);
            L.mapquest.geocoding().reverse(e.latlng, generatePopupContent);
        });

        function generatePopupContent(error, response) {
            var location = response.results[0].locations[0];
            var street = location.street;
            var city = location.adminArea5;
            var state = location.adminArea3;
            popup.setContent(`${street}, ${city}, ${state} <p><a href="#ex1" rel="modal:open">Write Review</a></p> <p><a href="#ex1" rel="modal:open">Get Review</a></p>`);
        }

        L.popup({ closeButton: false })
            .setLatLng(latLng)
            .setContent(`${location.street}, ${location.adminArea5}, ${location.adminArea3} <p><a href="#ex1" rel="modal:open">Write Review</a></p> <p><a href="#ex1" rel="modal:open">Get Review</a></p>`)
            .openOn(map);

    }
    search_form_f_e.on("submit", (event) => {
        event.preventDefault();
        get_search_result();
    });
};
