'use strict';
// var searchWord = document.getElementById('restaurant-filter');
// var restaurantAside = document.createElement('aside');
// var restaurantUnList = document.createElement('ul');
// restaurantUnList.id = 'info-list';

var restaurantSearchHandler = function(event) {

  //Loop thru restArr to see if search name === restName || search food type === foodType || search location === restAddress
  for(var i in restArr) {
  //Checks restArr to see if target matches and array item
    if(restArr[i].restName === event.target.value ) {
      if (restaurantUnList.hasChildNodes()) {
        for (var j = restaurantUnList.childNodes.length - 1; j >= 0; j--) {
          restaurantUnList.removeChild(restaurantUnList.childNodes[j]);
        }
      }
      var restImage = document.createElement('img');
      restImage.id = 'showcase';
      restImage.src = restArr[i].src;
      restaurantUnList.appendChild(restImage);

      var nameLiEl = document.createElement('li');
      nameLiEl.id = 'info-list';
      nameLiEl.textContent = 'Name: ' + restArr[i].restName;
      restaurantUnList.appendChild(nameLiEl);

      var locationLiEl = document.createElement('li');
      locationLiEl.textContent = 'Location: ' + restArr[i].restAddress;
      restaurantUnList.appendChild(locationLiEl);

      var hoursLiEl = document.createElement('li');
      hoursLiEl.textContent = 'Hours: ' + restArr[i].restHours;
      restaurantUnList.appendChild(hoursLiEl);

      var typeLiEl = document.createElement('li');
      typeLiEl.textContent = 'Cuisine: ' + restArr[i].foodType;
      restaurantUnList.appendChild(typeLiEl);

      var phoneLiEl = document.createElement('li');
      phoneLiEl.textContent = 'Phone Number: ' + restArr[i].restPhone;
      restaurantUnList.appendChild(phoneLiEl);

      var websiteLiEL = document.createElement('li');
      websiteLiEL.textContent = 'Website: ' + restArr[i].restLink;
      restaurantUnList.appendChild(websiteLiEL);

      var codabilityLiEL = document.createElement('li');
      codabilityLiEL.textContent = 'Codability: ' + restArr[i].restCodability;
      restaurantUnList.appendChild(codabilityLiEL);

      var br = document.createElement('br');
      restaurantUnList.appendChild(br);
      saveHistory();   //goes thru array with all data and stores it in local
    }
  }
  restaurantAside.appendChild(restaurantUnList);
  document.body.appendChild(restaurantAside);
};

//Function for clearing localStorage will be linked to button and have removeItem() and alert
var clearFunction = function() {
  location.reload();
  localStorage.clear('pastHistory');
  alert('Your Data Has Been Deleted');
};

var saveHistory = function() {
  localStorage.setItem('pastHistory', JSON.stringify(restPastSearches));
}

// restPastSearches = JSON.parse(localStorage.getItem('pastHistory'));
var pastHistory = function() {
  restPastSearches = JSON.parse(localStorage.getItem('pastHistory'));
  for(var i = 0; i < restPastSearches.length; i++) {
    if(restPastSearches.length > 1 || restPastSearches !== null) {
      if (restaurantUnList.hasChildNodes()) {
        for (var j = restaurantUnList.childNodes.length - 1; j >= 0; j--) {
          restaurantUnList.removeChild(restaurantUnList.childNodes[j]);
        }
      }

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
  }

  restaurantAside.appendChild(restaurantUnList);
  document.body.appendChild(restaurantAside);
  restPastSearches = [];
};
