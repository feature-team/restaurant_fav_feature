'use strict';
var rmarkers1 = [];
var markers1 = [];

//Restaurant markers
markers1 = [
  ['0', 'Title', 47.619323, -122.341132, 'MOD Pizza'],
  ['1', 'Title', 47.623793, -122.357016, 'Blue Water Taco Grill'],
  ['2', 'Title', 47.625352, -122.356514, 'caffe Ladro'],
  ['3', 'Title', 47.617208, -122.346379, 'Uptown Espresso Belltown'],
  ['4', 'Title', 47.613769, -122.345676, 'Bedlam Coffee'],
  ['5', 'Title', 47.620947, -122.319769, 'Cafe Solstice'],
  ['6', 'Title', 47.617841, -122.347744, 'Bambinos Pizzeria'],
  ['7', 'Title', 47.614775, -122.347429, 'Shiro’s Sushi'],
  ['8', 'Title', 47.615290, -122.348389, 'No Anchor'],
  ['9', 'Title', 47.617212, -122.352632, 'Thai On One'],
  ['10', 'Title', 47.614016, -122.345114, 'Rocco’s'],
  ['11', 'Title', 47.615854, -122.350191, 'Taqueria Cantina'],
  ['12', 'Title', 47.619467, -122.355781, 'Plaza Garibaldi'],
  ['13', 'Title', 47.618311, -122.348449, 'Mantra Thai Restaurant & Bar'],
  ['14', 'Title', 47.618063, -122.347343, 'The 5 point Cafe'],
  ['15', 'Title', 47.618373, -122.347880, 'Zeeks Pizza'],
  ['16', 'Title', 47.616864, -122.351950, 'Green Leaf Vietnamese Restaurant'],
  ['17', 'Title', 47.597968, -122.324790, 'Eastern Cafe'],
  ['18', 'Title', 47.617841, -122.347629, 'Tilikum Place Cafe'],
  ['19', 'Title', 47.623287, -122.354610, 'Sugar Bakery & Coffeehouse'],
];
var initMap = function(){
  console.log('google');

  var seattle = {lat: 47.6111127, lng: -122.3373602};

  var options = {
    center: seattle, //SEATTLE COORDINATES
    zoom: 14,
    mapTypeId: 'roadmap'
  };

  var map = new
  google.maps.Map(document.getElementById('map'), options);

  for (var i = 0; i <markers1.length; i ++){
    console.log('HTTING', markers1[i]);
    addMarker(markers1[i]);
  }

  function addMarker(marker){
    var title = marker[4];
    var selectedStore = marker[4];
    var pos = new
    google.maps.LatLng(marker[2],
      marker[3]);

    var content = marker[4];

    var marker1 = new
    google.maps.Marker({
      title: title,
      animation: google.maps.Animation.DROP,
      position: pos,
      customInfo: title,
      icon: 'IMG/ham2.png',
      // icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      gestureHandling: 'cooperative',
      map: map
    });

    rmarkers1.push(marker1);

    var contentString = title;

    // Marker click listener

    google.maps.event.addListener(marker1, 'click', (function (marker1, map) {
      console.log('MARKER INFO',content);
      return function () {
        // console.log('Rmarker 1 gets pushed');
        var infoWindow = new google.maps.InfoWindow({
          content: contentString
        });
        infoWindow.open(map, marker1);
      };
    })(marker1, content));
  }
};

//Function to add marker to map

var filterMarkers = function (selectedStore) {
  for (var i = 0; i < markers1.length; i++) {
    var marker = rmarkers1[i];
    console.log(marker.title, selectedStore);

    if (marker.title === selectedStore || selectedStore.length === 0) {
      console.log('HITTING STORE');
      marker.setVisible(true);
    }
    // Categories don't match
    else {
      marker.setVisible(false);
    }
  }
};
