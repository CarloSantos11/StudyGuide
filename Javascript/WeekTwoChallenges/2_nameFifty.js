// Create a program that assigns your name as a variable
// Print your name fifty times//

// let name = "Steve";
// let num = 50;

// while (num > 0) {
//     console.log(name);
//     num = num -1;
// }


function nameCounter(name, num) {
    let counter = 0;
    while (counter < num) {
        console.log(name);
        counter++;
    }
}

nameCounter("Steven", 2);

