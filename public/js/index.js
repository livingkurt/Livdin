// const search_b_e = $("#search_b");
const search_i_e = $("#search_i");
const search_form_f_e = $("#search_form_f");


const get_search_result = () => {
    const search_result = search_i_e.val();
    print(search_result);
    // window.open(`/map/${search_result}`);
    window.open("/map");
    // var params = new URLSearchParams(window.location.search.slice(1));
    // console.log(params.get())
};


// if (window.location.href.indexOf("meals") > -1) {
//     // Assign the id that from the user chosen search result
//     var final_meal_id = $(this).attr("id")
//     // Open Drinks page and store id data inside of the url
//     var url = 'drinks.html?meal_id=' + final_meal_id;
//     var params = new URLSearchParams(window.location.search.slice(1));
//     if (params.has("drink_id")) {
//         url += "&drink_id=" + params.get("drink_id");
//     }
//     window.open(url, '_self');
// }

const print = x => console.log(x);

search_form_f_e.on("submit", (event) => {
    event.preventDefault();
    get_search_result();
});








