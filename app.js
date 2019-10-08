//RANDOM NUMBER GENERATOR/////////////////////////////////////////
var numberOfCustomers = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max - min + 1)) + min;
};

//STORE HOURS - COLUMN HEADINGS//////////////////////////////////
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var tableHeadingStoreHours = document.getElementById('firstSalesTableRow');
var printTableHeadings = function() {
  for(var a = 0; a < storeHours.length; a++) {
    var tableStoreHours = document.createElement('th');
    tableHeadingStoreHours.appendChild(tableStoreHours);
    tableStoreHours.textContent = `${storeHours[a]}`;
  }
  var tableHeadingTotals = document.createElement('th');
  tableHeadingStoreHours.appendChild(tableHeadingTotals);
  tableHeadingTotals.textContent = 'Daily Location Total';
};
printTableHeadings();

//TOTAL ROW IN TABLE///////////////////////////////////////////
var allStoreTotal = 0;
var totalsAcrossTheCompany = [];
var totalsByHour = [];
var tableTotalRow = document.getElementById('Totals');
var addingTotalsByHour = function() {
  for(var i = 0; i < storeHours.length; i++){
    totalsByHour.push(totalsAcrossTheCompany[i]+totalsAcrossTheCompany[i+14]+totalsAcrossTheCompany[i+28]+totalsAcrossTheCompany[i+42]+totalsAcrossTheCompany[i+56]);
    var tableTotalChild = document.createElement('td');
    tableTotalRow.appendChild(tableTotalChild);
    tableTotalChild.textContent = `${totalsByHour[i]}`;
  }
  for(var z = 0; z < totalsAcrossTheCompany.length; z++)
    allStoreTotal += totalsAcrossTheCompany[z];
  var tableAllStoreTotal = document.createElement('td');
  tableTotalRow.appendChild(tableAllStoreTotal);
  tableAllStoreTotal.textContent = `${allStoreTotal}`;
};

//COFFEESHOP CONSTRUCTOR FUNCTION///////////////////////////////////
var CoffeeShop = function(min, max, averageCookiesPerCustomer, cityName) {
  this.cookiesPerHour = [];
  this.min = min;
  this.max = max;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.totalCookiesPurch = 0;
  this.cityName = cityName;
  this.row = document.createElement('tr');
  this.row.setAttribute('id', this.cityName);
  this.salesList = document.getElementById(this.cityName);
};

CoffeeShop.prototype.numberOfCookiesNeeded = function() {
  var tableCityName = document.createElement('tr');
  this.salesList.appendChild(tableCityName);
  tableCityName.textContent = `${this.cityName}`;
  for(var i = 0; i < storeHours.length; i++) {
    this.cookiesPerHour.push(Math.round((numberOfCustomers(this.min, this.max))*(this.averageCookiesPerCustomer)));
    var storeSales = document.createElement('td');
    this.salesList.appendChild(storeSales);
    storeSales.textContent = `${this.cookiesPerHour[i]}`;
    this.totalCookiesPurch += this.cookiesPerHour[i];
    totalsAcrossTheCompany.push(this.cookiesPerHour[i]);
  }
  var totalCookiesListItem = document.createElement('td');
  this.salesList.appendChild(totalCookiesListItem);
  totalCookiesListItem.textContent = `${this.totalCookiesPurch}`;
};

//SEATTLE////////////////////////////////
var seattleCoffee = new CoffeeShop(23, 65, 6.3, 'Seattle');
seattleCoffee.numberOfCookiesNeeded();
console.log(seattleCoffee);
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

addingTotalsByHour();
