var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var numberOfCustomers = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max - min + 1)) + min;
};

var createSeattleSalesList = document.getElementById('seattleSalesFigures');
var seattleCoffee = {
        // storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
        cookiesPerHour: [],
        min: 10,
        max: 60,
        averageCookiesPerCustomer: 3,

        numberOfCookiesNeeded: function() {
            for(var i = 0; i < storeHours.length; i++){
                seattleCoffee.cookiesPerHour.push((numberOfCustomers(seattleCoffee.min, seattleCoffee.max))*(seattleCoffee.averageCookiesPerCustomer));
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

var createBellevueSalesList = document.getElementById('bellevueSalesFigures');

var bellevueCoffee = {
    cookiesPerHour: [],
    min: 8,
    max: 50,
    averageCookiesPerCustomer: 5,
    numberOfCookiesNeeded: function() {
        for(var i = 0; i < storeHours.length; i++) {
            bellevueCoffee.cookiesPerHour.push((numberOfCustomers(bellevueCoffee.min, bellevueCoffee.max))*(bellevueCoffee.averageCookiesPerCustomer));
            var bellevueSales = document.createElement('li');
            createBellevueSalesList.appendChild(bellevueSales);
            bellevueSales.textContent = `${storeHours[i]}: ${this.cookiesPerHour[i]} cookies`;
        }
    },
    totalCookiesPurch: 0,
    totalCookiesPurchased: function(){
        for(var z = 0; z < bellevueCoffee.cookiesPerHour.length; z++) {
            this.totalCookiesPurch = this.totalCookiesPurch + this.cookiesPerHour[z];
        }
        var totalCookiesListItem = document.createElement('li');
        createBellevueSalesList.appendChild(totalCookiesListItem);
        totalCookiesListItem.textContent = `Total: ${this.totalCookiesPurch} cookies`;
    }
}
bellevueCoffee.numberOfCookiesNeeded();
bellevueCoffee.totalCookiesPurchased();


var createRentonSalesList = document.getElementById('rentonSalesFigures');

var rentonCoffee = {
    cookiesPerHour: [],
    min: 6,
    max: 45,
    averageCookiesPerCustomer: 2,
    totalCookiesPurch: 0,

    numberOfCookiesNeeded: function() {
        for(var i = 0; i < storeHours.length; i++) {
            rentonCoffee.cookiesPerHour.push((numberOfCustomers(rentonCoffee.min, rentonCoffee.max))*rentonCoffee.averageCookiesPerCustomer);
            var rentonSales = document.createElement('li');
            createRentonSalesList.appendChild(rentonSales);
            rentonSales.textContent = `${storeHours[i]}: ${this.cookiesPerHour[i]} cookies`;
        }
    },
    totalCookiesPurchased: function() {
        for(z = 0; z < storeHours.length; z++) {
            this.totalCookiesPurch = this.totalCookiesPurch + rentonCoffee.cookiesPerHour[z];
        }
        var totalCookiesListItem = document.createElement('li');
        createRentonSalesList.appendChild(totalCookiesListItem);
        totalCookiesListItem.textContent = `Total: ${this.totalCookiesPurch} cookies`;
    }
}
rentonCoffee.numberOfCookiesNeeded();
rentonCoffee.totalCookiesPurchased();
// var createEverettSalesList = document.getElementById('everettSalesFigures');

// var createTacomaSalesList = document.getElementById('tacomaSalesFigures');