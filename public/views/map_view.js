module.exports = function(props){
    console.log(props);
    return `
    <div>
        <div class="mapbox"id="map" style="width: 100%; height: 100vh;">
            <form class="overlay"id="search_form_f" autocomplete="on">
                <input onfocus="this.placeholder = ''" onblur="this.placeholder='Address, Neighborhood, City, County'" type="text" name="" id="search_i" placeholder="Address, Neighborhood, City, County">
                <button target="_self" id="search_b">Search</button>
            </form>
            <div class="overlay" id="search_results">
                <p id="address_search"for="">Address: ${props}</p>
                <p id="rating_search"for="">Rating</p>
                <p id="review_search">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minima alias cumque temporibus
                    numquam, rem minus corrupti sequi qui officia veniam. Ratione officia autem odio deserunt
                    maiores rerum est ab!
                </p>
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

{/* <script src="../js/map.js"></script> */}