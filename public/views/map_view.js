module.exports = function(){
    return `
    <div id="map" style="width: 100%; height: 100vh;"></div>
    
    <footer id="footer">

    </footer>
    
    <script>
    window.onload = function() {

        //Initiate API key
        L.mapquest.key = 'nkL6LFerG2cvr74dIKmAFOfVpGn5ACIZ';
    
        //Define current location based of user input in the future
        var chosenLocation = {
            street: '222 Gibson Lake Rd',
            city: 'Crystal Falls',
            state: 'MI',
            postalCode: '49920'
        }
    
        //Run function create map using the user location
        L.mapquest.geocoding().geocode(chosenLocation, createMap);
    
        //Function to create map
        function createMap(error, response) {
            var location = response.results[0].locations[0];
            var latLng = location.displayLatLng;
            var map = L.mapquest.map('map', {
                center: latLng,
                layers: L.mapquest.tileLayer('map'),
                zoom: 18
            });
    
            //This creates a custom marker on the map
            var customIcon = L.mapquest.icons.circle({
                primaryColor: '#3b5998'
            });
    
            //This attaches the marker to the map
            L.marker(latLng, {
                icon: customIcon
            }).addTo(map);
    
        }
    }
    </script>
</body>

</html>
    `;
};

{/* <script src="../js/map.js"></script> */}