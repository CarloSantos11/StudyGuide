//Create a function that takes an array of numbers as an argument. 
// The function should find the maximum value in the array.

const numArray = [5, 12, 42, 129, 27, 9];

function largestNum(numbers) {
  let biggestNum = Math.max.apply(Math, numbers);
  console.log(`The largest number in the array is ${biggestNum}`);
}

largestNum(numArray);



//Create a similar function that takes an array of numbers as an argument. 
// The function should find the minimum value in the array.

function smallestNum(numbers) {
  let smallestNum = Math.min.apply(Math, numbers);
  console.log(`The smallest number in the array is ${smallestNum}`);
}

smallestNum(numArray);



//Create a similar function that takes an array of numbers as an argument. 
// The function should find the second greatest value in the array.
//use sort to sort the array from smallest to largest number:    
// array.sort(function(a,b){return a-b});
//then remove the smallest number in the array using the shift method:    
// array.shift()
//find the current smallest number in the array

function secondSmallestNum(numbers) {
  numbers.sort(function (a, b) {
    return a - b;
  });
  numbers.shift();
  console.log(`The second smallest number in the array is ${numbers[0]}`);
}

secondSmallestNum(numArray);





// 1. Loop through any of the above arrays
// 2. Use square bracket notation [] to access our users 
// occupation: Software developer

// let firstArray = ["Hello", "World", "My", "Name", "Is", "Blank"];
// let newNumArray = [1,2,3,4,6,7,9,5];
// let userInfo = ["FirstName", "LastName", "Software Developer", "31"];

// firstArray.forEach(myFunction);

// function myFunction(firstArray, userInfo) {
//   console.log(firstArray);
  // console.log(`${index} ${userInfo} `); 
// }
