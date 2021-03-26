/*
-take input from a prompt
-store the input in a variable
-convert input from Fahrenheit to Celsius
-display the converted temp on the screen
 for the user
 */

let cDegrees;
let fDegrees = prompt("Please enter a number for degrees");

if (fDegrees != null) {
    cDegrees = Math.floor((fDegrees - 32) * 5/9);
    document.getElementById("display").innerHTML = `${fDegrees} degrees Fahrenheit converts to ${cDegrees} degrees Celsius.`; 
}