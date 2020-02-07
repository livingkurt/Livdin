// module.exports = function(props){
//     return `
//     <div>
//         <div>
//             <form class="overlay"id="search_form_f" autocomplete="on">
//                 <input onfocus="this.placeholder = ''" onblur="this.placeholder='Address, Neighborhood, City, County'" type="text" name="" id="search_i" placeholder="Address, Neighborhood, City, County">
//                 <button target="_self" id="search_b">Search</button>
//             </form>
//             <div class="overlay" id="search_results">
//                 <p id="address_search"for="">Address: ${props.address}</p>
//                 <p id="rating_search"for="">Price: ${props.price}</p>
//                 <p id="review_search">Sqft: ${props.sqft} ft</p>
//                 <p id="review_search">Beds/Bath: ${props.beds}/${props.baths} </p>
//                 <img src=${props.photo}>
//             </div>
//         </div>
//         <div class="mapbox"id="map" style="width: 100%; height: 100vh;"></div>
//     </div>

//     <footer id="footer">

//     </footer>

//     <script src="../js/map.js"></script>
// </body>

// </html>
//     `;
// };

{ /* <script src="../js/map.js"></script> */ }




module.exports = function () {
    return `
    <div>
        <div id="map_container">
            <div id="search_box">
                <form class="overlay"id="search_form_f_map" autocomplete="on">
                    <input onfocus="this.placeholder = ''" onblur="this.placeholder='Address, Neighborhood, City, County'" type="text" name="" id="search_i_map" placeholder="Address, Neighborhood, City, County">
                    <button target="_self" id="search_b_map">Search</button>
                </form>
                <div class="overlay" id="search_results">
                    <p id="address_search"for="">Address:</p>
                    <p id="rating_search"for="">Price:</p>
                    <p id="review_search">Sqft: ft</p>
                    <p id="review_search">Beds/Bath: </p>
                    <img src=>
                </div>
            </div>
            <div class="mapbox"id="map" style="width: 100%; height: 100vh;"></div>
        </div>

        <div class="mapbox"id="map" style="width: 100%; height: 100vh;">
        <!-- modal -->
        <div id="ex1" class="modal">
            <p>THIS IS WHERE WE ADD OUR REVIEW FORM.</p>
            <a href="#" rel="modal:close">Close</a>
        </div>
        </div>

    </div>
    
    <footer id="footer">

    </footer>
    
    <script src="../js/map.js"></script>
</body>

</html>
    `;
};

{ /* <script src="../js/map.js"></script> */ }