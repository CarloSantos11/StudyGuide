// Function to check if Palindrome.
// Create a function that takes in a string as an argument. The function should check to see if the string is palindrome, meaning it would be the same word backwards as forwards. The function should give us true for words like "mom", "wow", "race car" 




function isPalindrome(string) {
    let re = /[\W_]/g;
    let lowString = string.toLowerCase().replace(re, '');
    let reverseString = lowString.split('').reverse().join('');
    return reverseString === lowString
}
console.log(isPalindrome('race car'));





// Function to return first half of a string
// Create a string function called firsHalf that takes a string as an argument and only returns the first half of the word. If the word is odd add the middle letter'
// Ex: firstHalf('Example')  => Exam
// Ex. firstHalf('computers') => compu

function firstHalf(string) {
    if (string.length % 2 == 0) {
        return string.slice(0, string.length / 2)
    } else {
        return string.slice(0, (string.length / 2) + 1)
    }
}
console.log(firstHalf('Hope'));
console.log(firstHalf("Faith"));


//Object

let dog = {
    breed: "Italian Greyhound",
    age: 3,
    color: "black/white",
    weightInLbs: 29,
    gender: "female",
    fixed: true,
    name: Hope,
}
console.log(dog);


//Car object

let car = {
    make: "Kia",
    model: "Optima",
    year: 2017,
    color: "Sangria",
    engineOn: true,
    start: function() { 
        start == false
    },
    stop: function() {
        start == true
    },
    drive: function() {
        if (this.start) {
            alert("Let's Go!")
        } else {
            alert("No Go!")
        }
    }
}