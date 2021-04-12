// Getting User Input Node JS
// https://www.codecademy.com/articles/getting-user-input-in-node-js

// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// readline.question('Who are you?\n', function(name) {console.log(`Hey there ${name}!`);readline.close();});



// Mark and John are trying to compare their BMI(Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height)(mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula(you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall.John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall.John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK �

// const markHeight = 1.88;
// const markWeight = 95;
// let markBmi = markWeight / (markHeight ** 2);

// const johnHeight = 1.76;
// const johnWeight = 85;
// let johnBmi = johnWeight / (johnHeight ** 2);

// let markHigherBmi = markBmi > johnBmi;

// if (markHigherBmi === true) {
//   console.log("Mark has a higher BMI");
// } else {
//   console.log("John has a higher BMI")
// }


// There are two gymnastics teams, Dolphins and Koalas.They compete against each
// other 3 times.The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console.Don't forget that there can be a draw, so test for that
// as well(draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points.Hint: Use a logical operator to test for minimum
// score, as well as multiple else -if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points.Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// const dolphinsAverage = (96 + 108 + 89) / 3;
// const koalasAverage = (88 + 91 + 110) / 3;
// const minimumScoreMet = (dolphinsAverage >= 100 || koalasAverage >= 100);

// console.log(dolphinsAverage, koalasAverage);
// console.log(minimumScoreMet);

// if(dolphinsAverage > koalasAverage) {
//   console.log("Dolphins win");
// } else if (koalasAverage > dolphinsAverage) {
//   console.log("Koalas win");
// } else console.log("Draw");


// const dolphinsAverage = (96 + 150 + 89) / 3;
// const koalasAverage = (88 + 91 + 110) / 3;
// const minimumScoreMet = (dolphinsAverage >= 100 || koalasAverage >= 100);


// if (dolphinsAverage > koalasAverage && minimumScoreMet) {
//   console.log("Dolphins win");
// } else if (koalasAverage > dolphinsAverage && minimumScoreMet) {
//   console.log("Koalas win");
// } else if(minimumScoreMet){
//   console.log("Draw");
// } 


// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant.In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20 %.
// Your tasks:
// 1. Calculate the tip, depending on the bill value.Create a variable called 'tip' for
// this.It's not allowed to use an if/else statement � (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
//   (bill + tip).Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430


// function tipCalc(bill) {
//   const tip = (bill > 50 && bill < 300) ? (bill * 0.15) : (bill * 0.20);
//   console.log(tip, tip + bill)  
// }

// tipCalc(275);
// tipCalc(40);
// tipCalc(430);

// let sumOfTwo = function(numOne, numTwo) {
//   return numOne + numTwo;
// }

// let sumOfTwo = (numOne, numTwo) => numOne + numTwo;

// sumOfTwo(50, 5)
// console.log(sumOfTwo(50, 5));

// function age(birthYear) {
//   let year = new Date().getFullYear();
//   console.log(year - birthYear);
 
//   // return(Date.prototype.getFullYear - birthYear);
// }
// age(1989);

// ----------------------------------------------------------
// Coding Challenge:
// Steven is still building his tip calculator, using the same rules as before: Tip 15 % of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20 %.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above(you can check out
// the code from first tip calculator challenge if you need to).Use the function
//   type you like the most.Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44



// Psuedo
// loop through our bills array. 
// Run each array element through our function
// We want to take the evaluated value and push it into our array of tips


// const bills = [125, 555, 44];
// const tips = [];
// const total = [];

// for(let i = 0; i < bills.length; i++) {
//   tips[i] = tipCalc(bills[i])
//   total[i] = tips[i] + bills[i];
// }

// console.log(tips)
// console.log(total)

// function tipCalc(bill) {
//   const tip = (bill > 50 && bill < 300) ? (bill * 0.15) : (bill * 0.20);
//   // console.log(tip, tip + bill)
//   return tip;
// }


// // Running an array of years through a function that cacluates an age 
// // based on the current year
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// }

// const years = [1998, 1967, 2002, 2010, 2018];
// const age = [];

// for (let i = 0; i < years.length; i++) {
//   age[i] = calcAge(years[i]);
// }


let myFirstCar = {
  make: "BMW",
  model: "Z3",
  year: "1960",
  color: "blue",
  mileage: 999999990,
  started: true,
  fuel: 2,
  addFuel: function(amount) {
    this.fuel += amount;
  },
  drive: function() {
    if(this.started) {
      console.log("Wee were driving")
    } else {
      console.log("the car must be started")
    }
  },
  start: function () {
    if (this.fuel == 0) {
      console.log("go fill up first");
      this.addFuel(2);
      this.fuel -= 1;
      console.log("just added fuel try again");
    } else {
      console.log("vroom vroom");
      this.fuel -= 1;
      console.log(`This much fuel left ${this.fuel}`)
    }
  }
}


myFirstCar.start();