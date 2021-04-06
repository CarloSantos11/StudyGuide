// Create a function that takes in a string as an argument. 
// The function should check to see if the string is palindrome, 
// meaning it would be the same word backwards as forwards. The function 
// should give us true for words like "mom", "wow", "race car"

function palindrome(string) {
    let backwards = string.split("").reverse().join("");
    if (string === backwards) {
        console.log("This is a palindrome.");
    } else {
        console.log("Not a palindrome.")
    }
}

palindrome("hello");
palindrome("race car");




// - Create a string function called firsHalf that takes a string as
//  an argument and only returns the first half of the word. If the word 
//  is odd add the middle letter'
// Ex: firstHalf('Example')  => Exam
// Ex. firstHalf('computers') => compu

function firstHalf(string) {
    let stringArray = string.split("");
    let halfLength = (stringArray.length / 2);
    let halfWord = "";
    for (let i=0; i <= halfLength; i++) {
        halfWord = halfWord + string[i];  
    } console.log(halfWord);
    return halfWord;
}

firstHalf("chocolate");
firstHalf("concatenate");


let college = {
    classes: "Biology 101",
    students: "",
    location: "Kansas City, MO",
    name: "UMKC",
    tuition: "$100/credit hour"
}

console.log(college);


let car = {
    make: "mazda",
    model: "miata",
    carStarted: false,
    startCar: function() {
        console.log("winding up noise");
        return this.carStarted = true;
    },
    stopCar: function() {
        console.log("squeak");
    },
    drive: function() {
        if (this.carStarted) {
            console.log("We're moving!");
        } else {
            console.log("No go");
        }
    }
}

car.startCar();
car.drive();
