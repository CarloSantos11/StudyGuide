let positionOne = Math.floor(Math.random() *5);
let positionTwo = positionOne +1;
let positionThree = positionTwo +1;
let guess;
let hits = 0;
let totalGuesses = 0;
let shipSunk = false;

while (shipSunk == false) {
  guess = prompt("Ready... Aim... FIRE! (Enter a number from 0 to 6)");
  if (guess < 0 || guess > 6) {
    alert("Please enter a valid number quickly!  We're under attack!!");
  } else {
    totalGuesses = totalGuesses + 1;
    console.log(totalGuesses);
    if (
      guess == positionOne ||
      guess == positionTwo ||
      guess == positionThree
    ) {
      console.log(hits);
      alert("Direct hit!");
      hits = hits + 1;
      
      if (hits == 3) {
        shipSunk = true;            
        alert("You sank my battleship!");
        }
      } else {
        alert("You missed!  Guess again.");
    }
  }
}
let stats =`It took you ${totalGuesses} guesses to sink my battleship.` + "  Your accuracy was " + (3/totalGuesses * 100) + "%.";
alert(stats);