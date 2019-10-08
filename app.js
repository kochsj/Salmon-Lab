var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var numberOfCustomers = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max - min + 1)) + min;
};

var CoffeeShop = function(cookiesPerHour, min, max, averageCookiesPerCustomer, totalCookiesPurch) {
  this.cookiesPerHour = cookiesPerHour;
  this.min = min;
  this.max = max;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.totalCookiesPurch = totalCookiesPurch;
};

var bellevueCoffee = new CoffeeShop([], 3, 40, 6, 0);
console.log(bellevueCoffee);

var createSeattleSalesList = document.getElementById('seattleSalesFigures');
var seattleCoffee = {
  // storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  cookiesPerHour: [],
  min: 23,
  max: 65,
  averageCookiesPerCustomer: 6.3,

  numberOfCookiesNeeded: function() {
    for(var i = 0; i < storeHours.length; i++){
      seattleCoffee.cookiesPerHour.push(parseInt((numberOfCustomers(seattleCoffee.min, seattleCoffee.max))*(seattleCoffee.averageCookiesPerCustomer)));
      var seattleSales = document.createElement('li');
      createSeattleSalesList.appendChild(seattleSales);
      seattleSales.textContent = `${storeHours[i]}: ${this.cookiesPerHour[i]} cookies`;
    }
  },
  totalCookiesPurch: 0,
  totalCookiesPurchased: function(){
    for(var y = 0; y < seattleCoffee.cookiesPerHour.length; y++){
      this.totalCookiesPurch = this.totalCookiesPurch + this.cookiesPerHour[y];
    }
    var totalCookiesListItem = document.createElement('li');
    createSeattleSalesList.appendChild(totalCookiesListItem);
    totalCookiesListItem.textContent = `Total: ${this.totalCookiesPurch} cookies`;
  }
};
seattleCoffee.numberOfCookiesNeeded();
seattleCoffee.totalCookiesPurchased();
// console.log(seattleCoffee.totalCookiesPurch);
// console.log(seattleCoffee.cookiesPerHour);
// console.log(numberOfCustomers(seattleCoffee.min, seattleCoffee.max));

var createtokyoSalesList = document.getElementById('tokyoSalesFigures');

var tokyoCoffee = {
  cookiesPerHour: [],
  min: 3,
  max: 24,
  averageCookiesPerCustomer: 1.2,
  numberOfCookiesNeeded: function() {
    for(var i = 0; i < storeHours.length; i++) {
      tokyoCoffee.cookiesPerHour.push(parseInt((numberOfCustomers(tokyoCoffee.min, tokyoCoffee.max))*(tokyoCoffee.averageCookiesPerCustomer)));
      var tokyoSales = document.createElement('li');
      createtokyoSalesList.appendChild(tokyoSales);
      tokyoSales.textContent = `${storeHours[i]}: ${this.cookiesPerHour[i]} cookies`;
    }
  },
  totalCookiesPurch: 0,
  totalCookiesPurchased: function(){
    for(var z = 0; z < tokyoCoffee.cookiesPerHour.length; z++) {
      this.totalCookiesPurch = this.totalCookiesPurch + this.cookiesPerHour[z];
    }
    var totalCookiesListItem = document.createElement('li');
    createtokyoSalesList.appendChild(totalCookiesListItem);
    totalCookiesListItem.textContent = `Total: ${this.totalCookiesPurch} cookies`;
  }
};
tokyoCoffee.numberOfCookiesNeeded();
tokyoCoffee.totalCookiesPurchased();


var createDubaiSalesList = document.getElementById('dubaiSalesFigures');

var dubaiCoffee = {
  cookiesPerHour: [],
  min: 11,
  max: 38,
  averageCookiesPerCustomer: 2.3,
  totalCookiesPurch: 0,

  numberOfCookiesNeeded: function() {
    for(var i = 0; i < storeHours.length; i++) {
      dubaiCoffee.cookiesPerHour.push(parseInt((numberOfCustomers(dubaiCoffee.min, dubaiCoffee.max))*dubaiCoffee.averageCookiesPerCustomer));
      var dubaiSales = document.createElement('li');
      createDubaiSalesList.appendChild(dubaiSales);
      dubaiSales.textContent = `${storeHours[i]}: ${this.cookiesPerHour[i]} cookies`;
    }
  },
  totalCookiesPurchased: function() {
    for(var z = 0; z < storeHours.length; z++) {
      this.totalCookiesPurch = this.totalCookiesPurch + dubaiCoffee.cookiesPerHour[z];
    }
    var totalCookiesListItem = document.createElement('li');
    createDubaiSalesList.appendChild(totalCookiesListItem);
    totalCookiesListItem.textContent = `Total: ${this.totalCookiesPurch} cookies`;
  }
};
dubaiCoffee.numberOfCookiesNeeded();
dubaiCoffee.totalCookiesPurchased();


var createParisSalesList = document.getElementById('parisSalesFigures');

var parisCoffee = {
  cookiesPerHour: [],
  min: 20,
  max: 38,
  averageCookiesPerCustomer: 2.3,
  totalCookiesPurch: 0,

  numberOfCookiesNeeded: function(){
    for(var i = 0; i < storeHours.length; i++) {
      parisCoffee.cookiesPerHour.push(parseInt((numberOfCustomers(parisCoffee.min, parisCoffee.max))*(parisCoffee.averageCookiesPerCustomer)));
      var parisSales = document.createElement('li');
      createParisSalesList.appendChild(parisSales);
      parisSales.textContent = `${storeHours[i]}: ${this.cookiesPerHour[i]} cookies`;
    }
  },
  totalCookiesPurchased: function() {
    for(var z = 0; z < storeHours.length; z++) {
      this.totalCookiesPurch = this.totalCookiesPurch + this.cookiesPerHour[z];
    }
    var totalCookiesListItem = document.createElement('li');
    createParisSalesList.appendChild(totalCookiesListItem);
    totalCookiesListItem.textContent = `Total: ${this.totalCookiesPurch} cookies`;
  }

};
// console.log(parisCoffee.cookiesPerHour);
parisCoffee.numberOfCookiesNeeded();
parisCoffee.totalCookiesPurchased();

var createLimaSalesList = document.getElementById('limaSalesFigures');

var limaCoffee = {
  cookiesPerHour: [],
  min: 2,
  max: 16,
  averageCookiesPerCustomer: 4.6,
  totalCookiesPurch: 0,

  numberOfCookiesNeeded: function() {
    for(var i = 0; i < storeHours.length; i++) {
      limaCoffee.cookiesPerHour.push(parseInt((numberOfCustomers(limaCoffee.min, limaCoffee.max))*limaCoffee.averageCookiesPerCustomer));
      var limaSales = document.createElement('li');
      createLimaSalesList.appendChild(limaSales);
      limaSales.textContent = `${storeHours[i]}: ${this.cookiesPerHour[i]} cookies`;
    }
  },
  totalCookiesPurchased: function(){
    for(var z = 0; z < storeHours.length; z++){
      this.totalCookiesPurch = this.totalCookiesPurch + this.cookiesPerHour[z];
    }
    var totalCookiesListItem = document.createElement('li');
    createLimaSalesList.appendChild(totalCookiesListItem);
    totalCookiesListItem.textContent = `Total: ${this.totalCookiesPurch} cookies`;
  }
};
limaCoffee.numberOfCookiesNeeded();
limaCoffee.totalCookiesPurchased();
