'use strict';
//RANDOM NUMBER GENERATOR/////////////////////////////////////////
var numberOfCustomers = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max - min + 1)) + min;
};
//USER FORM EVENT HANDLER/////////////////////////////////////////
var userForm = document.getElementById('userForm');
userForm.addEventListener('submit', buildOutStore);

function buildOutStore(event) {
  event.preventDefault();
  var location = event.target.location.value;
  var average = event.target.averageCookies.value;
  var minimum = event.target.minCustomers.value;
  var maximum = event.target.maxCustomers.value;
  userForm.location.setAttribute('style', '');
  userForm.averageCookies.setAttribute('style', '');
  userForm.minCustomers.setAttribute('style', '');
  userForm.maxCustomers.setAttribute('style', '');
  for(var m = 0; m < storeObjectArray.length; m++){
    if(location.toUpperCase() === storeObjectArray[m].cityName) {
      var removeToReplace = document.getElementById(`${storeObjectArray[m].cityName}`);
      removeToReplace.remove();
      storeObjectArray.splice(m, 1);
      var dynamicTotalsRow = document.getElementById('totalsRow');
      dynamicTotalsRow.remove();
      addingTotalsByHour();
      return;
    }
  }
  if(isNaN(minimum) || minimum === '') {
    alert(`Minimum Number of Customers Per Hour Required. "${minimum}" is not a vailid entry.`);
    userForm.minCustomers.setAttribute('style', 'background-color: rgb(243, 99, 99);');
    userForm.minCustomers.style.border = 'dashed red 3px';
    event.target.minCustomers.value = null;
    return;
  }
  if(isNaN(maximum) || maximum === ''){
    alert(`Maximum Number of Customers Per Hour Required. "${maximum}" is not a valid entry.`);
    userForm.maxCustomers.setAttribute('style', 'background-color: rgb(243, 99, 99);');
    userForm.maxCustomers.style.border = 'dashed red 3px';
    event.target.maxCustomers.value = null;
    return;
  }
  if(isNaN(average) || average === ''){
    alert(`Average Cookies Purchased by Each Customer Required. "${average}" is not a valid entry.`);
    userForm.averageCookies.setAttribute('style', 'background-color: rgb(243, 99, 99);');
    userForm.averageCookies.style.border = 'dashed red 3px';
    event.target.averageCookies.value = null;
    return;
  }
  if(location === '' || true !== isNaN(location)){
    alert(`City Name Required. "${location}" is not a valid entry.`);
    userForm.location.setAttribute('style', 'background-color: rgb(243, 99, 99);');
    userForm.location.style.border = 'dashed red 3px';
    event.target.location.value = null;
    return;
  }
  var buildStore = new CookieShop(minimum, maximum, average, location);
  storeObjectArray.push(buildStore);
  buildStore.numberOfCookiesNeeded();
  dynamicTotalsRow = document.getElementById('totalsRow');
  dynamicTotalsRow.remove();
  addingTotalsByHour();
  userForm.reset();
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
var storeObjectArray = [];
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
    for(var z = 0; z < storeObjectArray.length; z++) {
      // totalsByHour += allStoreArray[z][i];
      totalsByHour += storeObjectArray[z].cookiesPerHour[i];
      tableTotalChild.textContent = `${totalsByHour}`;
    }
  }
  for(var f = 0; f < storeObjectArray.length; f++){
    for(var j = 0; j < storeHours.length; j++) {
      totalsAcrossTheCompany += storeObjectArray[f].cookiesPerHour[j];
    }
  }
  var totalOfAllStoresCell = document.createElement('td');
  tableTotalRow.appendChild(totalOfAllStoresCell);
  totalOfAllStoresCell.textContent = `${totalsAcrossTheCompany}`;
};

//CookieSHOP OBJECT CONSTRUCTOR FUNCTION///////////////////////////////////
var CookieShop = function(min, max, averageCookiesPerCustomer, cityName) {
  this.cookiesPerHour = [];
  this.min = min;
  this.max = max;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.totalCookiesPurch = 0;
  this.cityName = cityName.toUpperCase();
  this.salesList = 0;
};

//CookieSHOP METHOD///////////////////////////////////////////////////////
CookieShop.prototype.numberOfCookiesNeeded = function() {
  this.row = document.createElement('tr');
  this.row.setAttribute('id', this.cityName);
  tableHeadingStoreHours.appendChild(this.row);
  this.salesList = document.getElementById(this.cityName);
  var tableCityName = document.createElement('td');
  tableCityName.setAttribute('class', 'rowName');
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
var seattleCookies = new CookieShop(23, 65, 6.3, 'Seattle');
storeObjectArray.push(seattleCookies);
seattleCookies.numberOfCookiesNeeded();
//TOKYO/////////////////////////////////
var tokyoCookies = new CookieShop(3, 24, 1.2, 'Tokyo');
storeObjectArray.push(tokyoCookies);
tokyoCookies.numberOfCookiesNeeded();
//DUBAI/////////////////////////////////
var dubaiCookies = new CookieShop(11, 38, 3.7, 'Dubai');
storeObjectArray.push(dubaiCookies);
dubaiCookies.numberOfCookiesNeeded();
//PARIS/////////////////////////////////
var parisCookies = new CookieShop(20, 38, 2.3, 'Paris');
storeObjectArray.push(parisCookies);
parisCookies.numberOfCookiesNeeded();
//LIMA/////////////////////////////////
var limaCookies = new CookieShop(2, 16, 4.6, 'Lima');
storeObjectArray.push(limaCookies);
limaCookies.numberOfCookiesNeeded();

addingTotalsByHour();
