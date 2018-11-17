'use strict';

var restaurantAside = document.getElementById('restaurant-list');
var restaurantUnList = document.getElementById('info-list');
var restPastSearches = [];

var restaurantSearchHandler = function(event) {

  //Loop thru restArr to see if search name === restName || search food type === foodType || search location === restAddress
  for(var i in restPastSearches) {
  //Checks restPastSearches to see if target matches and array item
    if(restPastSearches[i].restName === event.target.value ) {
      if (restaurantUnList.hasChildNodes()) {
        for (var j = restaurantUnList.childNodes.length - 1; j >= 0; j--) {
          restaurantUnList.removeChild(restaurantUnList.childNodes[j]);
        }
      }

      var nameLiEl = document.createElement('li');
      nameLiEl.id = 'info-list';
      nameLiEl.textContent = 'Name: ' + restPastSearches[i].restName;
      restaurantUnList.appendChild(nameLiEl);

      var locationLiEl = document.createElement('li');
      locationLiEl.textContent = 'Location: ' + restPastSearches[i].restAddress;
      restaurantUnList.appendChild(locationLiEl);

      var hoursLiEl = document.createElement('li');
      hoursLiEl.textContent = 'Hours: ' + restPastSearches[i].restHours;
      restaurantUnList.appendChild(hoursLiEl);

      var typeLiEl = document.createElement('li');
      typeLiEl.textContent = 'Cuisine: ' + restPastSearches[i].foodType;
      restaurantUnList.appendChild(typeLiEl);

      var phoneLiEl = document.createElement('li');
      phoneLiEl.textContent = 'Phone Number: ' + restPastSearches[i].restPhone;
      restaurantUnList.appendChild(phoneLiEl);

      var websiteLiEL = document.createElement('li');
      websiteLiEL.textContent = 'Website: ' + restPastSearches[i].restLink;
      restaurantUnList.appendChild(websiteLiEL);

      var codabilityLiEL = document.createElement('li');
      codabilityLiEL.textContent = 'Codability: ' + restPastSearches[i].restCodability;
      restaurantUnList.appendChild(codabilityLiEL);

      var br = document.createElement('br');
      restaurantUnList.appendChild(br);
      saveHistory();   //goes thru array with all data and stores it in local
    }
  }
  restaurantAside.appendChild(restaurantUnList);
};

//Function for clearing localStorage will be linked to button and have removeItem() and alert
var clearFunction = function() {
  location.reload();
  localStorage.removeItem('pastHistory');
  alert('Your Data Has Been Deleted');
};

var saveHistory = function() {
  localStorage.setItem('pastHistory', JSON.stringify(restPastSearches));
};

var pastHistory = function() {
  // Clear previous content
  while (restaurantUnList.firstChild) {
    restaurantUnList.removeChild(restaurantUnList.firstChild);
  }
  
  restPastSearches = JSON.parse(localStorage.getItem('pastHistory'));
  
  for(var i = 0; i < restPastSearches.length; i++) {
    var restImage = document.createElement('img');
    restImage.id = 'showcase';
    restImage.src = restPastSearches[i].src;
    restaurantUnList.appendChild(restImage);
    var nameLiEl = document.createElement('li');
    nameLiEl.id = 'info-list';
    nameLiEl.textContent = 'Name: ' + restPastSearches[i].restName;
    restaurantUnList.appendChild(nameLiEl);

    var locationLiEl = document.createElement('li');
    locationLiEl.textContent = 'Location: ' + restPastSearches[i].restAddress;
    restaurantUnList.appendChild(locationLiEl);

    var hoursLiEl = document.createElement('li');
    hoursLiEl.textContent = 'Hours: ' + restPastSearches[i].restHours;
    restaurantUnList.appendChild(hoursLiEl);

    var typeLiEl = document.createElement('li');
    typeLiEl.textContent = 'Cuisine: ' + restPastSearches[i].foodType;
    restaurantUnList.appendChild(typeLiEl);

    var phoneLiEl = document.createElement('li');
    phoneLiEl.textContent = 'Phone Number: ' + restPastSearches[i].restPhone;
    restaurantUnList.appendChild(phoneLiEl);

    var websiteLiEL = document.createElement('li');
    websiteLiEL.textContent = 'Website: ' + restPastSearches[i].restLink;
    restaurantUnList.appendChild(websiteLiEL);

    var codabilityLiEL = document.createElement('li');
    codabilityLiEL.textContent = 'Codability: ' + restPastSearches[i].restCodability;
    restaurantUnList.appendChild(codabilityLiEL);

    var br = document.createElement('br');
    restaurantUnList.appendChild(br);
  }
  restaurantAside.appendChild(restaurantUnList);
  document.body.appendChild(restaurantAside);
};


var listFavorites = function() {
  while (restaurantUnList.firstChild) {
    restaurantUnList.removeChild(restaurantUnList.firstChild);
  }
  
  var workingArray = JSON.parse(localStorage.getItem('restArr'));
  for(var i in workingArray){
    if (workingArray[i].favorite) {
      //render it!
    var restImage = document.createElement('img');
    restImage.id = 'showcase';
    restImage.src = workingArray[i].src;
    restaurantUnList.appendChild(restImage);
    var nameLiEl = document.createElement('li');
    nameLiEl.id = 'info-list';
    nameLiEl.textContent = 'Name: ' + workingArray[i].restName;
    restaurantUnList.appendChild(nameLiEl);

    var locationLiEl = document.createElement('li');
    locationLiEl.textContent = 'Location: ' + workingArray[i].restAddress;
    restaurantUnList.appendChild(locationLiEl);

    var hoursLiEl = document.createElement('li');
    hoursLiEl.textContent = 'Hours: ' + workingArray[i].restHours;
    restaurantUnList.appendChild(hoursLiEl);

    var typeLiEl = document.createElement('li');
    typeLiEl.textContent = 'Cuisine: ' + workingArray[i].foodType;
    restaurantUnList.appendChild(typeLiEl);

    var phoneLiEl = document.createElement('li');
    phoneLiEl.textContent = 'Phone Number: ' + workingArray[i].restPhone;
    restaurantUnList.appendChild(phoneLiEl);

    var websiteLiEL = document.createElement('li');
    websiteLiEL.textContent = 'Website: ' + workingArray[i].restLink;
    restaurantUnList.appendChild(websiteLiEL);

    var codabilityLiEL = document.createElement('li');
    codabilityLiEL.textContent = 'Codability: ' + workingArray[i].restCodability;
    restaurantUnList.appendChild(codabilityLiEL);

    var br = document.createElement('br');
    restaurantUnList.appendChild(br);

    restaurantAside.appendChild(restaurantUnList);
    document.body.appendChild(restaurantAside);
    }
  }
};