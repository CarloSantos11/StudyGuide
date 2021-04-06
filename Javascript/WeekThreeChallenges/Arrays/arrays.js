let = firstArray = ["Hello", "World", "My", "Name", "Is"];

const calcAge = function(birthYear) {
  return 2037 - birthYear;
}

const years = [1998, 1967, 2002, 2010, 2018];
const age = [];

for(let i = 0; i < years.length; i++) {
  age[i] = calcAge(years[i]);
}

console.log(age);
// console.log(calcAge(years[3]));