var app = angular.module('app', []);

app.factory('targetLatLngFactory', function() {
  var targetLatLng = {
    longitude: '130',
    latitude: '-25.12'
  };
  return targetLatLng;
});

app.controller('manualLatLongInputController', ['$scope', 'targetLatLngFactory', function($scope, targetLatLng) {
  $scope.targetLatLng = targetLatLng;

  $scope.inquireAPET = function() {
    console.log(targetLatLng);
  };

}]);


app.factory('APETResultFactory', ['$http', 'targetLatLngFactory', function($http, targetLatLng) {
  var APETResults = {
    annual: 'N/A',
    january: 'NA',
    february: 'NA',
    march: 'NA',
    april: 'NA',   
    may: 'NA',
    june: 'NA',
    july: 'NA',
    august: 'NA',  
    september: 'NA',
    october: 'NA',
    november: 'NA',
    december: 'NA',

    fetch: function() {
      var longitude = targetLatLng.longitude;
      var latitude = targetLatLng.latitude;
      $http({
        method: 'GET',
        url: '/APET/' + longitude + ',' + latitude
      })
      .then(
        function onSuccess(response) {
          var data = response.data;
          this.annual = data.annual;
          this.january = data.january;
          this.february = data.february;
          this.march = data.march;
          this.april = data.april;
          this.may = data.may;
          this.june = data.june;
          this.july = data.july;
          this.august = data.august;
          this.september = data.september;
          this.october = data.october;
          this.november = data.november;
          this.december = data.december;
        }.bind(this),
        function onError(response) {
          console.log('Error: ', response);
        }
      );
    }
  };

  return APETResults;
}]);

app.controller('resultsTableController', ['$scope', 'APETResultFactory', function($scope, APETReslts) {
  $scope.result = APETReslts;
}]);

app.controller('inquireButtonController', ['$scope', 'APETResultFactory', function($scope, APETResults) {
  $scope.getAPETData = function() {
    APETResults.fetch();
  };
}]);

app.controller('resultTextInputController', ['$scope', 'APETResultFactory', function($scope, APETResults) {
  $scope.APET = APETResults;
}]);

app.controller('mapController', ['$scope', 'targetLatLngFactory', 'APETResultFactory', function($scope, targetLatLng, APETResults) {
  $scope.dummyToTriggerBinding = function($event) {};
  $scope.targetLatLng = targetLatLng;

  var mapOptions = {
    zoom: 4,
    center: {lat: -25.363, lng: 131.044}
  };

  $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

  $scope.marker = new google.maps.Marker({
    map: $scope.map
  });

  $scope.input = document.getElementById('pac-input');
  var defaultBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(-43.41, 111.97),
    new google.maps.LatLng(-9.89, 153.12));

  $scope.searchBox = new google.maps.places.SearchBox($scope.input, {bounds: defaultBounds});
  $scope.map.controls[google.maps.ControlPosition.TOP].push($scope.input);

  $scope.map.addListener('click', function(event) {
    var clickedLat = event.latLng.lat();
    var clickedLng = event.latLng.lng();
    $scope.targetLatLng.longitude = clickedLng + '';
    $scope.targetLatLng.latitude = clickedLat + '';
    $scope.marker.setPosition({'lat': clickedLat, 'lng': clickedLng});    
    
    APETResults.fetch();
  });

  $scope.searchBox.addListener('places_changed', function() {
    var places = $scope.searchBox.getPlaces();

    if (places.length === 0) {
      return;
    }
    
    var searchedLatitude = places[0].geometry.location.lat();
    var searchedLongitude = places[0].geometry.location.lng();
    
    $scope.map.panTo({lat: searchedLatitude, lng: searchedLongitude});
    $scope.map.setZoom(14);
    
    // See the Lat & Long field values
    $scope.marker.setPosition({'lat': searchedLatitude, 'lng': searchedLongitude});   

    $scope.targetLatLng.longitude = searchedLongitude + '';
    $scope.targetLatLng.latitude = searchedLatitude + ''; 
    APETResults.fetch();
  });

}]);

