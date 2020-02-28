
const search_i_e = $("#search_i");
const search_form_f_e = $("#search_form_f");
const checkbox = $("#checkbox")
const checkbox_div = $("#slider_container_div_m")
const map_container_e = $("#search_box_results");

let on_off = '&';


console.log(checkbox.val());

$(document).ready(function () {
  $('#checkbox').on('change', function () {
    var isChecked = $(this).is(':checked');
    if (isChecked) {
      on_off = 'X'
      checkbox_div.attr("style", "display: block");
      map_container_e.attr("style", "display: block");
    } else {
      on_off = '&'
      checkbox_div.attr("style", "display: none");
      map_container_e.attr("style", "display: none");
    }
  });
});

const get_search_result = () => {
  let search_result = search_i_e.val();
  console.log(on_off)
  window.open(`/map/${search_result}${on_off}`, "_self");
};

search_form_f_e.on("submit", (event) => {
  event.preventDefault();
  get_search_result();
});




