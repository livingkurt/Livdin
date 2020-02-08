module.exports = function () {
    return `
    <div>
        <div id="map_container">
            <div id="search_box_input">
                <form class="overlay"id="search_form_f_map" autocomplete="on">
                    <input onfocus="this.placeholder = ''" onblur="this.placeholder='Address, Neighborhood, City, County'" type="text" name="" id="search_i_map" placeholder="Address, Neighborhood, City, County">
                    <button target="_self" id="search_b_map">Search</button>
                </form>
            </div>
            <div id="search_box_results">
            </div>
            <div class="mapbox"id="map" style="width: 100%; height: 100vh;"></div>
        </div>

        <div class="mapbox"id="map" style="width: 100%; height: 100vh;">
        <!-- modal -->
        <div id="ex1" class="modal">
            <h4 class="form_header">Write a review for this property!</h4>
                <form class="signup">
                    <div class="">
                        <label id="revAddress" class="form_labels"for="address">Address</label>
                    </div>
                    <div class="">
                        <label class="form_labels"for="exampleInputPassword1">Overall Rating Out of 5</label>
                        <input onfocus="this.placeholder = ''"type="text" class="all_inputs_i" id="rating-input" onblur="this.placeholder='Rating'" placeholder="Rating">
                    </div>
                    <div class="">
                        <label class="form_labels"for="exampleInputUsername1">Detailed Review</label>
                        <input onfocus="this.placeholder = ''"type="text" class="all_inputs_i" id="review-input" onblur="this.placeholder='Review'" placeholder="Review">
                    </div>
                    <button id="submitBtn" class="all_buttons_b" type="submit" class="btn btn-default">Submit</button>
                </form>
                <a href="#" rel="modal:close">Close</a>
            </div>
        </div>

    </div>
    
    
    <script src="../js/map.js"></script>
    <script src="../js/map2.js"></script>
</body>

</html>
    `;
};

{ /* <script src="../js/map.js"></script> */ }