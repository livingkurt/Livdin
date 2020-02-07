// const parser = require("../../server");

// var parsed = parser.parseLocation('1005 N Gravenstein Highway Sebastopol CA 95472');

// const search_b_e = $("#search_b");
const search_i_e = $("#search_i");
const search_form_f_e = $("#search_form_f");


const get_search_result = () => {
    let search_result = search_i_e.val();
    // search_result = search_result.replace(/[^\w\s]/gi, "");
    
    // search_result = search_result.replace(" ", "+");
    // print(search_result);
    $.get(`/api/parse/${search_result}`).then(function (result) {
        const data = result;
        // console.log(data.formattedAddress);
        search_result = data.formattedAddress;
        // var params = new URLSearchParams(window.location.search.slice(1));
        // const parsed = parser.parseLocation(search_result);
        // get_user_info(data.id);
        window.open(`/map/${search_result}`, "_self");
    });
    
    
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


/////function to get the user input for the axios call/////
$("#search_b").on("click", function (event) {
    event.preventDefault();

    var homeSearch = {
        address: $("#search_i").val().trim()
    };
    console.log("index" + JSON.stringify(homeSearch));
    $.post("api/searched", homeSearch)
        .then(function (data) {
            console.log(data);
        });
    location.href = "/map";
});