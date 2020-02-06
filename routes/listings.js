/////axios versions//////
const axios = require("axios");
module.exports = function (){
    axios({
        "method": "GET",
        "url": "https://realtor.p.rapidapi.com/properties/list-for-rent",
        "headers": {
            "content-type": "application/json",
            "x-rapidapi-host": "realtor.p.rapidapi.com",
            "x-rapidapi-key": "ee6b62ee4amshafea3e45f16c03ap17677fjsn293316618b80"
        }, "params": {
            "price_min": "1500",
            "postal_code": "76543",
            "radius": "10",
            "sort": "relevance",
            "state_code": "TX",
            "limit": "200",
            "city": "Killeen",
            "offset": "0"
        }
    })
        .then(response => {
        //res.sendFile(path.join(__dirname, '../public/views/map_view.js'));
            console.log(response.data.listings[0].address);
            return (response.data.listings[0].address);
        })
        .catch(error => {
            console.log(error);
        });
        
        
};

//////unirest version/////
// var unirest = require("unirest");



// var req = unirest("GET", "https://realtor.p.rapidapi.com/properties/list-for-rent");



// /////example query parameters/////
// req.query({
//     "price_min": "1500",
//     "radius": "10",
//     "sort": "relevance",
//     "state_code": "TX",
//     "limit": "5",
//     "city": "Killeen",
//     "offset": "0"
// });

// /////actual query we would use. object would be replaced with the request parameters from the search on home page//////
// // req.query({
// //     "radius":"10",
// //     "sort": "relevance",
// //     "state_code": object.state_code,
// //     "city": object.city,
// //     "limit": "4",
// //     "offest": "0"
// //		"postal_code": "78745"
// // });

// req.headers({
//     "x-rapidapi-host": "realtor.p.rapidapi.com",
//     "x-rapidapi-key": "ee6b62ee4amshafea3e45f16c03ap17677fjsn293316618b80"
// });

// // /////potential info to be used for results on map.html
// req.end(function (res) {
//     if (res.error) throw new Error(res.error);
//     console.log(res.body.listings[0].address);
//     console.log(res.body.listings[0].price);
//     console.log(res.body.listings[0].beds);
//     console.log(res.body.listings[0].baths);
//     console.log(res.body.listings[0].sqft);
//     console.log(res.body.listings[0].photo);
// });


/////parser for full addresses to be used later in the app/////
// var parser = require('parse-address'); 
// var parsed = parser.parseLocation('Killeen, TX 76543');
// console.log(parsed);