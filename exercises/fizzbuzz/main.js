/*
- create a loop that prints from 1 to 100
- if the number is divisible by 3 print "Fizz"
- if number is multiple of 5 print "Buzz"
- if the number is a multiple of both print "FizzBuzz"
*/

for (let i=1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
        document.getElementById("display").innerHTML += "<span>FizzBuzz</span>";
    } else if (i % 3 === 0 ) {
        console.log("Fizz");
        document.getElementById("display").innerHTML += "<span>Fizz</span>";
    } else if (i % 5 === 0 ) {
        console.log("Buzz");
        document.getElementById("display").innerHTML += "<span>Buzz</span>"; 
    } else {
        document.getElementById("display").innerHTML += "<span>" + i + "</span> ";
        console.log(i);
    } 
}
