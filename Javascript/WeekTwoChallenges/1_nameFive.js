// Create a program that assigns your name as a variable 
// Print your name five times

// let name = "Steve";
// let num = 5;

// while (num > 0) {
//     console.log(name);
//     num = num -1;
// }


function nameFive(name) {
    let counter = 0;
    while (counter < 5) {
        console.log(name);
        counter++;
    }
}

nameFive("me");