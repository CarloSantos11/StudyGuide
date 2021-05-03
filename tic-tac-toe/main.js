// - Create a game board
// - Give players the choice to be x's or o's
// - After player chooses store the variable for player1 and hide the input field.
// - Allow players to choose a square /div
// - Show either an X or an O in the square based on the player that chose it.
// - Once a square is picked it should no longer accept another value.
// - Allow players to take turns (go from o's to x's or vice versa)
// - When one player gets 3 in a row (diagonally, horiz, or vertically) - end the game and declare the winner.
// - Show a "Play Again?" button and clear the board when clicked.

let playersGamePiece;
let compGamePiece;
let currentMove;
let number;
let winningCombos = [
  ["one", "two", "three"],
  ["four", "five", "six"],
  ["seven", "eight", "nine"],
  ["one", "four", "seven"],
  ["two", "five", "eight"],
  ["three", "six", "nine"],
  ["one", "five", "nine"],
  ["three", "five", "seven"],
];

let playersPicks = [];
let compPicks = [];

// Getting player's choice - "X" or "O"
function playersChoice() {
  playersGamePiece = document.querySelector("input").value.toUpperCase();
  if (playersGamePiece === "O") {
    compGamePiece = "X";
  } else if (playersGamePiece === "X") {
    compGamePiece = "O";
  } else {
    alert("Please enter an X or an O");
    document.querySelector("input").value = "";
    playersGamePiece = "";
    return;
  }
  document.getElementById("form").innerHTML= '<h3>Please choose a square</h3>';
  // Player chooses first - current move is assigned to player's game piece
  currentMove = playersGamePiece;
}

// Allowing player to choose squares
function chooseSquare(className) {
  // Keeping track of turns, alternate between turns and update the innerHTML to reflect move
  let square = document.querySelector(className);
  square.innerHTML = currentMove;
  number = square.className;
  // Logging what squares the player has picked and what squares the computer's picked and toggling whose turn it is
  if (currentMove == playersGamePiece) {
    playersPicks.push(number);
    console.log(playersPicks);
    currentMove = compGamePiece;
  } else {
    currentMove = playersGamePiece;
    compPicks.push(number);
  }
  return determineWinner();
}

function determineWinner() {
  // Start checking for winner once player or computer chooses 3 squares
  if (playersPicks.length >= 3 || compPicks.length >= 3) {
    playersPicks = playersPicks.sort();
    compPicks = compPicks.sort();
    for (let i = 0; i < winningCombos.length; i++) {
      // Sorting the arrays  playersPicks = playersPicks.sort();
      winningCombos[i] = winningCombos.sort();
      // Determining if player wins or loses
      console.log(winningCombos[i]);
      console.log(playersPicks);

      // check to see if all nine squares have been clicked and assign it to a variable
      // join compPicks & playerPicks arrays together and then check the new arrays length by 9
      let totalSquaresPicked = playersPicks.concat(compPicks);
      console.log(totalSquaresPicked.length);

      if (playersPicks == winningCombos[i]) {
        alert("You won");
      } else if (compPicks == winningCombos[i]) {
        alert("You lost");
      } else if (totalSquaresPicked.length === 9) {
        alert("It's a draw.");
      }
      return;
    }
  }
}
