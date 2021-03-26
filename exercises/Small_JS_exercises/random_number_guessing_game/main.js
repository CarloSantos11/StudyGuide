/*
- Create a random number
- Prompt a user for a guess
- Allow the user 5 attempts to guess the random number
- Compare the user's # to random # to check for a match
- If there's a match end the game with an alert.
- If no match, and if user has more attempts
  ask the user for another guess, and run the
  program again until there's a match or until they run out of attempts
*/

let randomNum = Math.floor(Math.random() * (10 - 1) + 1);
let attempts = 0;
let guess;
let tryAgain = true;

while (attempts < 5 && tryAgain) {
    let guess = prompt ("I've picked a number between 1 & 10.  Try to guess what it is.");
    attempts++;
    console.log( guess != randomNum);
    console.log(attempts);
    console.log(randomNum);
    if (guess == randomNum) {
        document.getElementById("display").innerHTML = `You guessed it!  Nice job!`;
        tryAgain = false;
    } else {
        alert (`You're close.  Try again.`);
    }
}
    if (tryAgain == true) {
    alert(`Sorry.  You've run out of attempts.`);
    } else {
    alert(`You cracked my code!`);
    }