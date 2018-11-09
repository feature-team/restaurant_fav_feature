'use strict';
var restArr = []; //Array for storing new objects
var restArrNames = [];

var restPastSearches = []; //Array for storing past searches
var searchWord = document.getElementById('restaurant-filter');
var restaurantAside = document.createElement('aside');
var restaurantUnList = document.createElement('ul');
restaurantUnList.id = 'info-list';

//Constructor function for object properties
var CreateRestaurant = function(restName, restAddress, restHours, foodType, keywords, restPhone, restCodability, restLink, src) {
  this.restName = restName;
  this.restAddress = restAddress;
  this.restHours = restHours;
  this.foodType = foodType;
  this.keywords = keywords;
  this.restPhone = restPhone;
  this.restCodability = restCodability;
  this.restLink = restLink;
  this.src = src; //For images
  restArr.push(this); //All new objects will go into array so we can loop through info
  restArrNames.push(this.restName);
};

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
      localStorage.setItem('pastHistory', JSON.stringify(restArr[i])); //goes thru array with all data and stores it in local
    }
  }
  restaurantAside.appendChild(restaurantUnList);
  document.body.appendChild(restaurantAside);
};

//Event Listener for dropdown
searchWord.addEventListener('change', restaurantSearchHandler);

//Function for clearing localStorage will be linked to button and have removeItem() and alert
var clearFunction = function() {
  location.reload();
  localStorage.clear('pastHistory');
  alert('Your Data Has Been Deleted');
};

var pastHistory = function() {
  restPastSearches.push(JSON.parse(localStorage.getItem('pastHistory')));
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

//Twenty restaurants will inherit object properties and method
//Restaurant 1//new CreateRestaurant(NAME, ADDRESS, HOURS, TYPE, KEYWORDS, PHONE, CODABILITY, WEBSITE)
new CreateRestaurant('MOD Pizza', '305 W Harrison St #221, Seattle, WA 98109 (Seattle Center)', 'Sunday - Thursday 10:30am - 8pm, Friday-Saturday 10:30am -9pm', 'Fast, Italian', ['pizza', 'salad', 'italian', 'breadsticks', 'beer', 'milkshake'], '(206)428-6315', ['- Wifi no', '-Price $$', '-Distance .5 miles'], 'https://modpizza.com/locations/seattle-center/', 'IMG/modPizza.jpg');

//Restaurant 2//new CreateRestaurant(NAME, ADDRESS, HOURS, TYPE, KEYWORDS, PHONE, CODABILITY, WEBSITE)
new CreateRestaurant('Blue Water Taco Grill', '515 Queen Anne Ave N, Seattle, WA 98119', 'Sunday - Saturday 11am - 9pm', 'sit-down, Mexican', ['Mexican','burrito', 'tacos', 'enchiladas', 'beer', 'liquor'], '(206)352-2407', ['- Wifi no', '-Price $$', '- Distance .5 miles'], 'http://www.bluewatertacogrill.com/', 'IMG/blueWaterTacoGrill.jpg');

//Restaurant 3//new CreateRestaurant(NAME, ADDRESS, HOURS, TYPE, KEYWORDS, PHONE, CODABILITY, WEBSITE)
new CreateRestaurant('Caffe Ladro', '600 Queen Anne Ave N, Seattle, WA 98109', 'Sunday-Saturday 5:30am - 8pm', 'Cafe, sit-down, fast', ['coffee', 'pastries', 'tea', 'cookies', 'muffins'], 'none', ['- Wifi yes', '-Price $', '- Distance .8 miles'], 'https://caffeladro.com/', 'IMG/cafeLadro.jpeg');

//Restaurant 4//new CreateRestaurant(NAME, ADDRESS, HOURS, TYPE, KEYWORDS, PHONE, CODABILITY, WEBSITE)
new CreateRestaurant('Uptown Espresso Belltown','2504 4th Ave, Seattle, WA 98121', 'Sunday 6am - 10pm, Monday-Thursday 5am - 10pm, Friday 5pm - 11pm, Saturday 6am - 11pm', 'Cafe, sit-down, fast', ['coffee', 'pastries', 'tea', 'cookies', 'muffins'], '(206)441-1084', ['- Wifi yes', '-Price $', '- Distance .4 miles'], 'https://velvetfoam.com/', 'IMG/uptownEspresso.png');

//Restaurant 5//new CreateRestaurant(NAME, ADDRESS, HOURS, TYPE, KEYWORDS, PHONE, CODABILITY, WEBSITE)
new CreateRestaurant('Bedlam Coffee', '2231 2nd Ave, Seattle, WA 98121', 'Sunday 7am - 9pm, Monday- Thursday 6am - 9pm, Friday 6am - 10pm, Saturday 7am - 10pm', 'Cafe, sit-down, fast', ['coffee', 'pastries', 'tea', 'cookies', 'muffins'], '(202)547-0369', ['- Wifi yes', '-Price $', '- Distance .4 miles'], 'http://www.bedlamcoffee.com/', 'IMG/bedlamCoffee.jpg');

//Restaurant 6//new CreateRestaurant(NAME, ADDRESS, HOURS, TYPE, KEYWORDS, PHONE, CODABILITY, WEBSITE)
new CreateRestaurant('Cafe Solstice', '925 E Thomas St, Seattle, WA 98102', 'Sunday 6:30am - 11pm, Monday - Friday 6am - 11pm', 'Cafe, sit-down, fast', ['coffee', 'pastries', 'tea', 'cookies', 'muffins', 'sandwiches', 'beer', 'soup'], '(206)403-1916', ['- Wifi yes', '-Price $', '- Distance 1.7 miles'], 'https://www.cafesolsticeseattle.com/', 'IMG/cafeSolstice.jpg');

//Restaurant 7//new CreateRestaurant(NAME, ADDRESS, HOURS, TYPE, KEYWORDS, PHONE, CODABILITY, WEBSITE)
new CreateRestaurant('Bambinos Pizzeria', '401 Cedar St, Seattle, WA 98121', 'Sunday - Saturday 11:30am - 11pm', 'sit-down, Italian', ['salad', 'appetizers', 'pizza', 'pasta', 'calzone', 'dessert'], '(206)269-2222', ['- Wifi no', '-Price $$', '- Distance .3 miles'], 'https://bambinsppizzeria-online-ordering.securebrygid.com/zgrid/themes/10535/intro/index.jsp ', 'IMG/bambinosPizzeria.jpg');

//Restaurant 8//new CreateRestaurant(NAME, ADDRESS, HOURS, TYPE, KEYWORDS, PHONE, CODABILITY, WEBSITE)
new CreateRestaurant('Shiro’s Sushi', '2401 2nd Ave, Seattle, WA 98121', 'Sunday - Saturday 5:30pm - 10:30pm', 'sit-down, sushi, soup, tea, wine, ice cream', ['sushi'], '(206)443-9844', ['- Wifi no', '-Price $$', '- Distance .3 miles'], ' http://shiros.com/', 'IMG/shirosSushi.jpg');

//Restaurant 9//new CreateRestaurant(NAME, ADDRESS, HOURS, TYPE, KEYWORDS, PHONE, CODABILITY, WEBSITE)
new CreateRestaurant('No Anchor', '2505 2nd Ave #105, Seattle, WA 98121', 'Sunday 11am - 11pm, Monday- Thursday 12pm - 11pm, Friday 12pm -12am, Saturday 11am - 11pm', 'bar, sit-down', ['beer', 'liquor', 'wine', 'appetizers', 'American'], '(206)448-2610', ['- Wifi no', '-Price $$', '- Distance .3 miles'], ' https://www.noanchorbar.com/ ', 'IMG/noAnchor.jpg');

//Restaurant 10//new CreateRestaurant(NAME, ADDRESS, HOURS, TYPE, KEYWORDS, PHONE, CODABILITY, WEBSITE)
new CreateRestaurant('Thai On One', '2904 1st Ave, Seattle, WA 98121', 'Sunday 12pm - 9:30pm, Monday - Friday 11am - 9:30pm, Saturday 12pm - 9:30pm', 'Thai, sit-down', ['thai', 'appetizers', 'noodles', 'soup'], '(206)441-4348', ['- Wifi no', '-Price $', '- Distance .1 miles'], ' https://www.thaion1.com/', 'IMG/thaiOnOne.jpeg');

//Restaurant 11//new CreateRestaurant(NAME, ADDRESS, HOURS, TYPE, KEYWORDS, PHONE, CODABILITY, WEBSITE)
new CreateRestaurant('Rocco’s', '2228 2nd Ave, Seattle, WA 98121', 'Sunday - Saturday 11am - 2am', 'sit-down, Italian', ['pizza', 'beer', 'liquor', 'appetizers', 'salad', 'dessert'], '(206)448-2625', ['- Wifi no', '-Price $$', '- Distance .4 miles'], ' https://www.roccosseattle.com/', 'IMG/roccos.webp');

//Restaurant 12//new CreateRestaurant(NAME, ADDRESS, HOURS, TYPE, KEYWORDS, PHONE, CODABILITY, WEBSITE)
new CreateRestaurant('Taqueria Cantina', '2630 1st Ave, Seattle, WA 98121', 'Sunday 10am - 11pm, Monday- Thursday 11am - 11pm, Friday 11am - 12 am, Saturday 10am - 12am', 'sit-down, Mexican', ['Mexican', 'burrito', 'tacos', 'enchiladas', 'beer', 'liquor'], '(206)995-8588', ['- Wifi no', '-Price $$', '- Distance .2'], 'taqueriacantina.com', 'IMG/taqueriaCantina.jpg');

//Restaurant 13//new CreateRestaurant(NAME, ADDRESS, HOURS, TYPE, KEYWORDS, PHONE, CODABILITY, WEBSITE)
new CreateRestaurant('Plaza Garibaldi', '129 1st Ave N, Seattle, WA 98109', 'Sunday - Thursday 11am - 10pm, Friday-Saturday 11am - 2am', 'sit-down, Mexican', ['Mexican', 'burrito', 'tacos', 'enchiladas', 'beer', 'liquor'], '(206)397-4088', ['- Wifi no', '-Price $$', '- Distance .2 miles'], 'pgaribaldi.com', 'IMG/plazaGaribaldi.jpg');

//Restaurant 14//new CreateRestaurant(NAME, ADDRESS, HOURS, TYPE, KEYWORDS, PHONE, CODABILITY, WEBSITE)
new CreateRestaurant('Mantra Thai Restaurant & Bar', '2720 4th Ave #116, Seattle, WA 98121', 'Sunday 11am - pm, Monday - Saturday 11am - 9:30 pm', 'sit-down, Thai', ['thai', 'appetizers', 'noodles', 'soup', 'tea', 'dessert', 'rice'], '(206)659-0466', ['- Wifi no', '-Price $', '- Distance .2 miles'], 'http://mantrathai.com/', 'IMG/mantraThaiRestaurant.jpg');

//Restaurant 15//new CreateRestaurant(NAME, ADDRESS, HOURS, TYPE, KEYWORDS, PHONE, CODABILITY, WEBSITE)
new CreateRestaurant('The 5 point Cafe', '415 Cedar St, Seattle, WA 98119', 'Sunday-Saturday 12am - 12am', 'cafe, American, sit-down', ['breakfast', 'liquor', 'beer', 'soup', 'salad', 'sandwich', 'burgers'], '(206)448-9991', ['- Wifi no', '-Price $', '- Distance'], ' http://the5pointcafe.com/', 'IMG/fivePointCafe.jpg');

//Restaurant 16//new CreateRestaurant(NAME, ADDRESS, HOURS, TYPE, KEYWORDS, PHONE, CODABILITY, WEBSITE)
new CreateRestaurant('Zeeks Pizza', '419 Denny Way, Seattle, WA 98109', 'Sunday - Saturday 11am - 10pm', 'Fast, Italian', ['pizza', 'salad', 'Italian', 'breadsticks', 'beer'], '(206)285-8646', ['- Wifi no', '-Price $$', '- Distance .2 miles'], 'http://zeekspizza.com/locations-hours/zeeks-pizza-denny-belltown/', 'IMG/zeeksPizza.jpg');

//Restaurant 17//new CreateRestaurant(NAME, ADDRESS, HOURS, TYPE, KEYWORDS, PHONE, CODABILITY, WEBSITE)
new CreateRestaurant('Green Leaf Vietnamese Restaurant', '2800 1st Ave, Seattle, WA 98121', 'Sunday - Wednesday 11am -12am, Thursday -Saturday 11am - 2am', 'sit-down, Vietnamese', ['rice', 'dessert', 'salad', 'soup'], '(206)448-3318', ['- Wifi no', '-Price $$', '- Distance .1 miles'], 'http://greenleaftaste.com/#!/home/', 'IMG/greenLeafVietnamese.jpg' );

//Restaurant 18//new CreateRestaurant(NAME, ADDRESS, HOURS, TYPE, KEYWORDS, PHONE, CODABILITY, WEBSITE)
new CreateRestaurant('Eastern Cafe', '510 Maynard Ave S, Seattle, WA 98104', 'Sunday 9am - 8pm, Monday - Friday 7:30am - 10pm, Saturday 9am - 10pm', 'cafe, sit-down', ['sandwich', 'breakfast', 'wine', 'beer', 'dessert', 'salad', 'pastries', 'tea', 'coffee'], '(206)623-1776', ['- Wifi yes', '-Price $', '- Distance 1.9 miles'], 'https://www.facebook.com/EasternCafe', 'IMG/easternCafe.jpg');

//Restaurant 19//new CreateRestaurant(NAME, ADDRESS, HOURS, TYPE, KEYWORDS, PHONE, CODABILITY, WEBSITE)
new CreateRestaurant('Tilikum Place Cafe', '407 Cedar St, Seattle, WA 98121', 'Sunday 8am - 3pm & 5pm - 10 pm, Monday - Friday 11am - 3pm & 5pm - 10pm, Saturday 8am - 3pm & 5pm - 10pm', 'cafe, sit-down, American', ['breakfast', 'dessert', 'soup', 'appetizers'], '(206)282-4830', ['- Wifi no', '-Price $$', '- Distance .2 miles'], ' http://www.tilikumplacecafe.com/', 'IMG/tilikumCafe.jpg' );

//Restaurant 20//new CreateRestaurant(NAME, ADDRESS, HOURS, TYPE, KEYWORDS, PHONE, CODABILITY, WEBSITE)
new CreateRestaurant('Sugar Bakery & Coffeehouse', '110 Republican St, Seattle, WA 98109', 'Sunday 7am - 10pm, Monday-Friday 6:30am - 10pm, Saturday 7am - 10pm', 'cafe, sit-down, American', ['sandwich', 'breakfast', 'dessert', 'salad', 'pastries', 'tea', 'coffee'], '(206)695-2518', ['- Wifi yes', '-Price $', '- Distance .4 miles'], ' sugarbakerycafe.com', 'IMG/sugarBakery.jpg');

//Loop for filling dropdown
for(var i in restArrNames) {
  var option = restArrNames[i];
  var optionEl = document.createElement('option');
  optionEl.textContent = option;
  optionEl.value = option;
  searchWord.appendChild(optionEl);
}
