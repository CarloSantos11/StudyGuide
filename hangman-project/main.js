/* - Create a prompt asking user to enter a word/phrase to have another player guess.
   - Create an array to store the word or phrase in.
   - Create the board including the gallows, a list of letters to pick from, and empty spaces indicating phrase/word length.
   - Prompt the player to guess a letter.
   - If player guesses a letter that's part of the phrase, display the letter in the corresponding space(s) and delete the letter from list of letters to pick from.
   - If player's guess isn't part of the word/phrase then delete the letter from possible guesses and add a corresponding picture to the gallows.
   - If player guesses the correct word or phrase before entire body is displayed then alert ("You Won!"), otherwise display - "You Lost" and end the game.
   - Display a button asking if player would like to play again.
   */

let letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let secretWord;

let emptyPhrase = document.getElementById("demo").innerHTML;

// Get the secret word/phrase from the user, and display the letter to pick from.
function getPhrase() {
  let hiddenPhrase = document.getElementById("phrase").value;
  let secretWord = hiddenPhrase.split("");
  //   document.getElementById("demo").innerHTML = secretWord;
  makeBlankPhrase(secretWord);
  displayLetters();
  return secretWord;
}

// Make the word/phrase into blank spaces to display on the board.
function makeBlankPhrase(string) {
  let emptyString = "";
  console.log(string);
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      emptyString = `${emptyString}  `;
    } else {
      emptyString = `${emptyString}_ `;
    }
    document.getElementById("demo").innerHTML = `${emptyString}`;
    console.log(emptyString);
    //  console.log(secretWord[i]);
  }
}

// Display letters to choose from on the screen.
function displayLetters() {
  document.getElementById("letterChoice").innerHTML = letters;
}

//Determine if user picked a letter from the phrase
function pickedLetter() {
  let userChoice = prompt("Please choose a letter.");
  userChoice = userChoice.toUpperCase();
  console.log(userChoice);
  if ((userChoice = secretWord.includes(userChoice))) {
    let a = secretWord.indexOf("userChoice");
    document.getElementById("demo").innerHTML = secretWord[a];
    letters.slice().userChoice;
  }
}
