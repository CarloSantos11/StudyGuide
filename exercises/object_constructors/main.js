function Car (make, model, year, color, passengers, started) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.passengers = passengers;
    this.started = started;
    
    this.start = function() {    
        this.started = true;
        console.log("We're running");
    }
    this.stop = function() {
        this.started = false;
    }
    this.drive = function() {
        if (this.started) {
            console.log("Giddyup");
        } else {
            console.log("Start the car first.");
        }
    }
}

let Chevy = new Car("Chevy", "Bel Air", 1957, "red", 2, false);
let cadi = new Car("GM", "Cadillac", 1955, "tan", 5, false);
let fiat = new Car("Fiat", "500", 1957, "blue", 2, false);
let testCar = new Car("Webbyville Motors", "Concept Car", 2021, "teal", 2, true);

let carsArray = [Chevy, cadi, fiat, testCar];

for (let i=0; i < carsArray.length; i++) {
    carsArray[i].drive();
}

// Chevy.start();
Chevy.drive();

fiat.stop();
fiat.drive();
console.log(fiat.color, Chevy.make, Chevy.model, fiat.started);
