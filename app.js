var numberOfCustomers = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max - min + 1)) + min;
}

var seattleCoffee = {
    storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    cookiesPerHour: [],
    min: 2,
    max: 20,
    averageCookiesPerCustomer: 3,
    numberOfCookiesNeeded: function() {
        for(var i = 0; i < seattleCoffee.storeHours.length; i++){
            seattleCoffee.cookiesPerHour.push((numberOfCustomers(seattleCoffee.min, seattleCoffee.max))*(seattleCoffee.averageCookiesPerCustomer));
        }
    }
    }
seattleCoffee.numberOfCookiesNeeded();
console.log(seattleCoffee.cookiesPerHour);
// console.log(numberOfCustomers(seattleCoffee.min, seattleCoffee.max));