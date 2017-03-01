    function initMap() {
      var uluru = {lat: -25.363, lng: 131.044};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
      });
      
      var input = document.getElementById('pac-input');
      var defaultBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(-43.41, 111.97),
        new google.maps.LatLng(-9.89, 153.12));
      
      var searchBox = new google.maps.places.SearchBox(input, {bounds: defaultBounds});
      map.controls[google.maps.ControlPosition.TOP].push(input);
      
      searchBox.addListener('places_changed', function() {
        var places = searchBox.getPlaces();

        if (places.length === 0) {
          return;
        }
        
        var searchedLatitude = places[0].geometry.location.lat();
        var searchedLongitude = places[0].geometry.location.lng();
        
        map.panTo({lat: searchedLatitude, lng: searchedLongitude});
        map.setZoom(14);
        
        // See the Lat & Long field values
        marker.setPosition({'lat': searchedLatitude, 'lng': searchedLongitude});        
        $('#longitudeInput').val(searchedLongitude.toFixed(6));
        $('#latitudeInput').val(searchedLatitude.toFixed(6));
        
        // Send AJAX request
        $('#querySubmit').click();
        
      });

      var marker = new google.maps.Marker({
        map: map
      });

      
      // Add Hook for user clicking on the map
      map.addListener('click', function(event) {
        var clickedLat = event.latLng.lat();
        var clickedLng = event.latLng.lng();
        
        marker.setPosition({'lat': clickedLat, 'lng': clickedLng});
        
        // See the Lat & Long field values
        $('#longitudeInput').val(clickedLng);
        $('#latitudeInput').val(clickedLat);
        
        // Send AJAX request
        $('#querySubmit').click();
      });
    }