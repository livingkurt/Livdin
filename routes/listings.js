var unirest = require("unirest");



var req = unirest("GET", "https://realtor.p.rapidapi.com/properties/list-for-rent");


$("#search_b").on("click", function (event) {
    event.preventDefault();
    console.log("hello");
    // req.query({
    //     "price_min": "1500",
    //     "radius": "10",
    //     "sort": "relevance",
    //     "state_code": "TX",
    //     "limit": "5",
    //     "city": "Austin",
    //     "offset": "0"
    // });
    // req.end(function (res) {
    //     if (res.error) throw new Error(res.error);
    //     console.log(res.body.listings[0].address);
    //     console.log(res.body.listings[0].price);
    //     console.log(res.body.listings[0].beds);
    //     console.log(res.body.listings[0].baths);
    //     console.log(res.body.listings[0].sqft);
    //     console.log(res.body.listings[0].photo);
    // });

	
});
/////example query parameters/////
req.query({
    "price_min": "1500",
    "radius": "10",
    "sort": "relevance",
    "state_code": "TX",
    "limit": "5",
    "city": "Killeen",
    "offset": "0"
});

/////actual query we would use. object would be replaced with the request parameters from the search on home page//////
// req.query({
//     "radius":"10",
//     "sort": "relevance",
//     "state_code": object.state_code,
//     "city": object.city,
//     "limit": "4",
//     "offest": "0",
//		"postal_code": "78745"
// });

req.headers({
    "x-rapidapi-host": "realtor.p.rapidapi.com",
    "x-rapidapi-key": "ee6b62ee4amshafea3e45f16c03ap17677fjsn293316618b80"
});

// /////potential info to be used for results on map.html
req.end(function (res) {
    if (res.error) throw new Error(res.error);
    console.log(res.body.listings[0].address);
    console.log(res.body.listings[0].price);
    console.log(res.body.listings[0].beds);
    console.log(res.body.listings[0].baths);
    console.log(res.body.listings[0].sqft);
    console.log(res.body.listings[0].photo);
});


/////parser for full addresses to be used later in the app/////
// var parser = require('parse-address'); 
// var parsed = parser.parseLocation('Killeen, TX 76543');
// console.log(parsed);