const search_b_e = $("#search_b");
const search_i_e = $("#search_i");
const search_form_f_e = $("#search_form_f");


const get_search_result = () => {
    const search_result = search_i_e.val()
    print(search_result);
}

const print = x => console.log(x);

search_form_f_e.on("submit", (event) => {
    event.preventDefault();
    get_search_result()
})








