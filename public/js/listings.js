var unirest = require("unirest");

var req = unirest("GET", "https://realtor.p.rapidapi.com/properties/list-for-rent");

req.query({
	"price_min": "1500",
	"radius": "10",
	"sort": "relevance",
	"state_code": "TX",
	"limit": "200",
	"city": "Austin",
	"offset": "0"
});

req.headers({
	"x-rapidapi-host": "realtor.p.rapidapi.com",
	"x-rapidapi-key": "ee6b62ee4amshafea3e45f16c03ap17677fjsn293316618b80"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});