'use strict';
//RANDOM NUMBER GENERATOR/////////////////////////////////////////
var numberOfCustomers = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max - min + 1)) + min;
};
//USER FORM EVENT HANDLER/////////////////////////////////////////
var userFormThing = document.getElementById('userForm');
userFormThing.addEventListener('submit', buildOutStore);

function buildOutStore(event) {
  event.preventDefault();
  var location = event.target.location.value;
  var average = event.target.averageCookies.value;
  var minimum = event.target.minCustomers.value;
  var maximum = event.target.maxCustomers.value;

  var buildStore = new CoffeeShop(minimum, maximum, average, location);
  buildStore.numberOfCookiesNeeded();
  var dynamicTotalsRow = document.getElementById('totalsRow');
  dynamicTotalsRow.remove();
  addingTotalsByHour();
}

//STORE HOURS - COLUMN HEADINGS//////////////////////////////////
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var tableHeadingStoreHours = document.getElementById('salesTable');
var printTableHeadings = function() {
  var locationHeading = document.createElement('tr');
  tableHeadingStoreHours.appendChild(locationHeading);
  locationHeading.textContent = '';
  var cellAboveLocations = document.createElement('td');
  cellAboveLocations.setAttribute('class', 'emptyCell');
  locationHeading.appendChild(cellAboveLocations);
  for(var a = 0; a < storeHours.length; a++) {
    var tableStoreHours = document.createElement('th');
    locationHeading.appendChild(tableStoreHours);
    tableStoreHours.textContent = `${storeHours[a]}`;
  }
  var tableHeadingTotals = document.createElement('th');
  locationHeading.appendChild(tableHeadingTotals);
  tableHeadingTotals.textContent = 'Daily Location Total';
};
printTableHeadings();

//TOTAL ROW IN TABLE///////////////////////////////////////////
var allStoreArray = [];
// var tableTotalRow = document.getElementById('salesTable');
var addingTotalsByHour = function() {
  var totalsAcrossTheCompany = 0;
  var tableTotalRow = document.createElement('tr');
  tableTotalRow.setAttribute('id', 'totalsRow');
  tableHeadingStoreHours.appendChild(tableTotalRow);
  var cellUnderLocations = document.createElement('td');
  cellUnderLocations.setAttribute('class', 'emptyCell');
  tableTotalRow.appendChild(cellUnderLocations);
  cellUnderLocations.textContent = 'Totals';
  for(var i = 0; i < storeHours.length; i++){
    var totalsByHour = 0;
    var tableTotalChild = document.createElement('td');
    tableTotalRow.appendChild(tableTotalChild);
    for(var z = 0; z < allStoreArray.length; z++) {
      totalsByHour += allStoreArray[z][i];
      tableTotalChild.textContent = `${totalsByHour}`;
    }
    for(var j = 0; j < allStoreArray.length; j++) {
      totalsAcrossTheCompany += allStoreArray[j][i];
    }
  }
  var totalOfAllStoresCell = document.createElement('td');
  tableTotalRow.appendChild(totalOfAllStoresCell);
  totalOfAllStoresCell.textContent = `${totalsAcrossTheCompany}`;
};

//COFFEESHOP OBJECT CONSTRUCTOR FUNCTION///////////////////////////////////
var CoffeeShop = function(min, max, averageCookiesPerCustomer, cityName) {
  this.cookiesPerHour = [];
  this.min = min;
  this.max = max;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.totalCookiesPurch = 0;
  this.cityName = cityName;
  this.salesList = 0;
};

//COFFEESHOP METHOD///////////////////////////////////////////////////////
CoffeeShop.prototype.numberOfCookiesNeeded = function() {
  this.row = document.createElement('tr');
  this.row.setAttribute('id', this.cityName);
  tableHeadingStoreHours.appendChild(this.row);
  this.salesList = document.getElementById(this.cityName);
  var tableCityName = document.createElement('tr');
  this.salesList.appendChild(tableCityName);
  tableCityName.textContent = `${this.cityName}`;
  for(var i = 0; i < storeHours.length; i++) {
    this.cookiesPerHour.push(Math.round((numberOfCustomers(this.min, this.max))*(this.averageCookiesPerCustomer)));
    var storeSales = document.createElement('td');
    this.salesList.appendChild(storeSales);
    storeSales.textContent = `${this.cookiesPerHour[i]}`;
    this.totalCookiesPurch += this.cookiesPerHour[i];
  }
  var totalCookiesListItem = document.createElement('td');
  this.salesList.appendChild(totalCookiesListItem);
  totalCookiesListItem.textContent = `${this.totalCookiesPurch}`;
  allStoreArray.push(this.cookiesPerHour);
};

//SEATTLE////////////////////////////////
var seattleCoffee = new CoffeeShop(23, 65, 6.3, 'Seattle');
seattleCoffee.numberOfCookiesNeeded();
//TOKYO/////////////////////////////////
var tokyoCoffee = new CoffeeShop(3, 24, 1.2, 'Tokyo');
tokyoCoffee.numberOfCookiesNeeded();
//DUBAI/////////////////////////////////
var dubaiCoffee = new CoffeeShop(11, 38, 3.7, 'Dubai');
dubaiCoffee.numberOfCookiesNeeded();
//PARIS/////////////////////////////////
var parisCoffee = new CoffeeShop(20, 38, 2.3, 'Paris');
parisCoffee.numberOfCookiesNeeded();
//LIMA/////////////////////////////////
var limaCoffee = new CoffeeShop(2, 16, 4.6, 'Lima');
limaCoffee.numberOfCookiesNeeded();
//Houston////
var houstonCoffee = new CoffeeShop(4, 45, 3.8, 'Houston');
houstonCoffee.numberOfCookiesNeeded();

addingTotalsByHour();

