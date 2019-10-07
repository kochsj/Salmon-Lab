var parentEl = document.getElementById('parentElement');
parentEl.textContent = 'attempting to contact html';


//building new elements
//you need something for them to latch onto. appendChild()
var child = document.createElement('h1');
child.textContent = 'proof of life'
parentEl.appendChild(child);

var iceCreamShop = {
    shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    hourTotals: [12, 32, 24, 56, 37, 26, 38, 16, 38, 26, 13, 25, 36, 24],

    locationName: 'Pike Place Market',

    //render function lists out shop hours and hour totals
    render: function() {
        for(var i=0; i < this.shopHours.length; i++){
            var childEl = document.createElement('li');
            // childEl.textContent = 'Shop Hours: ' + this.shopHours[i];
            childEl.textContent = `Shop Hours: ${this.shopHours[i]} ~ Total Customers: ${this.hourTotals[i]}`;
            // backticks can be used in the place of single quotations. then you use the ${anything that needs to use a variable}
            parentEl.appendChild(childEl);
        }
    }
}
iceCreamShop.render();


//have a function make a randome number based on two imputs. a min and a max.
//