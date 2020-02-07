// window.onload = function () {

//     //Initiate API key
//     L.mapquest.key = "nkL6LFerG2cvr74dIKmAFOfVpGn5ACIZ";

//     //Define current location based of user input in the future
//     var chosenLocation = {
//         street: "6301 Steer Trail",
//         city: "Austin",
//         state: "TX",
//         postalCode: "78749"
//     };

//     //Run function create map using the user location
//     L.mapquest.geocoding().geocode(chosenLocation, createMap);

//     //Function to create map
//     function createMap(error, response) {
//         var location = response.results[0].locations[0];
//         var latLng = location.displayLatLng;
//         var map = L.mapquest.map("map", {
//             center: latLng,
//             layers: L.mapquest.tileLayer("map"),
//             zoom: 18
//         });

//         //This creates a custom marker on the map
//         var customIcon = L.mapquest.icons.circle({
//             primaryColor: "#3b5998"
//         });

//         //This attaches the marker to the map
//         L.marker(latLng, {
//             icon: customIcon
//         }).addTo(map);

//         //This creates a pop up with the users address displayed, and it does not have a close button
//         var customPopUp = L.popup({
//             closeButton: false
//         })
//             .setLatLng(latLng)
//             .setContent("<strong>" + chosenLocation.street + "\n" + chosenLocation.city + ", " + chosenLocation.state + " " + chosenLocation.postalCode + "</strong>")
//             .openOn(map);
//     }
// };

window.onload = function () {
    //Initiate API key
    L.mapquest.key = "nkL6LFerG2cvr74dIKmAFOfVpGn5ACIZ";
    var pathArray = window.location.pathname.split("/");

    console.log(pathArray[2]);
    let search_result = pathArray[2].split("%20").join(" ");
    console.log(search_result);
    $.get(`/api/parse/${search_result}`).then(function (result) {
        const data = result;
        console.log(data.realtor);
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


    

    //Run function create map using the user location
    // const start_map = () => {
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

        //This creates a custom marker on the map
        var customIcon = L.mapquest.icons.circle({
            primaryColor: "#3b5998"
        });

        //This attaches the marker to the map
        L.marker(latLng, {
            icon: customIcon
        }).addTo(map);

    }
};

const search_i_e = $("#search_i_map");
const search_form_f_e = $("#search_form_f_map");


const get_search_result = () => {
    let search_result = search_i_e.val();
    // search_result = search_result.replace(/[^\w\s]/gi, "");
    window.open(`/map/${search_result}`, "_self");
    
    // search_result = search_result.replace(" ", "+");
    // print(search_result);
    
    
    
    // print(params);
    // window.open(`/map/${search_result}`, "_self");
    
    // const parsed = parser.parseLocation(search_result);
    // print(parsed);
    // window.open(`/map/${search_result}`);
    // window.open("/map");
    // var params = new URLSearchParams(window.location.search.slice(1));
    // console.log(params.get())
};

// const print = x => console.log(x);

search_form_f_e.on("submit", (event) => {
    event.preventDefault();
    get_search_result();
});
// }

