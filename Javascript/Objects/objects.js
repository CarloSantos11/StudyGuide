// Create your own object 
// Ex: Car object

let myFirstCar = {
  make: "BMW",
  model: "Z3",
  year: "1960",
  color: "blue",
  mileage: 999999990
}

function prequal(car) {
  if (car.mileage > 10000 || car.year > 1960) {
    return false;
  }
  return true;
}

console.log(prequal(myFirstCar));

// JSON -> Javascript Object Notation

// Pass by Value vs. Pass By Reference

// Pass by value:

let passByValue = 100;

let passByReference = {
  amount: 100
};

function addTen(paramOne) {  /* our parameter creates a copy of the value we pass in */
  paramOne += 10;
  console.log(`paramOne in the function: ${paramOne}`);
}

function addTenToObject(paramOne) { /* this actually mutates the object we pass in */
  paramOne.amount += 10;
  console.log(`paramObjectOne in the function: ${paramOne.amount}`);
}

addTen(passByValue);
// Notice that passByValue does not mutate it's original value
console.log(`passByValue outside the function: ${passByValue}`);

// // Notice that passByReference does mutate it's original value
addTenToObject(passByReference);
console.log(`passByReference outside the function: ${passByReference.amount}`);