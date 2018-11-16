'use strict';

//Skyler
var restaurantAside = document.createElement('aside');
var restaurantUnList = document.createElement('div');
restaurantUnList.id = 'info-list';
//END Skyler

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

      // var imageDiv = document.createElement('div');
      // var restImage = document.createElement('img');
      // restImage.id = 'showcase';
      // restImage.src = restArr[i].src;
      // imageDiv.appendChild(restImage);
      // var faveIcon = document.createElement('img');
      // faveIcon.id = 'fave-icon';
      // faveIcon.src = "img/unfaved.png";
      // imageDiv.appendChild(faveIcon);
      // restaurantUnList.appendChild(imageDiv);

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

var pastHistory = function() {
  restPastSearches = JSON.parse(localStorage.getItem('pastHistory'));
  for(var i = 0; i < restPastSearches.length; i++) {

    //du-fuck is this shit?!?!?!?!?!
    // if(restPastSearches.length > 1 || restPastSearches !== null) {
    //   if (restaurantUnList.hasChildNodes()) {
    //     for (var j = restaurantUnList.childNodes.length - 1; j >= 0; j--) {
    //       restaurantUnList.removeChild(restaurantUnList.childNodes[j]);
    //     }
    //   }

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


  // Xochil and Skyler
  var listFavorites = function() {
    var workingArray = JSON.parse(localStorage.getItem('restArr'));
    console.log("I found " + workingArray);
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
  }
//*