// - Create a game board
// - Give players the choice to be x's or o's
// - After player chooses store the variable for player1 and hide the input field.
// - Allow players to choose a square /div
// - Show either an X or an O in the square based on the player that chose it.
// - Allow players to take turns (go from o's to x's or vice versa
// - When one player gets 3 in a row (diagonally, horiz, or vertically) - end the game and declare the winner.
// - Show a "Play Again?" button and clear the board when clicked.


let playersGamePiece;
let compGamePiece;
let currentMove;
let number;


// Getting player's choice
function playersChoice() {
    playersGamePiece = document.querySelector("input").value.toUpperCase();
    if (playersGamePiece !== "O" && playersGamePiece !== "X") {
        alert("Please enter an X or an O");
    }
    if (playersGamePiece === "O") {
        compGamePiece = "X";
    } else {     
        compGamePiece = "O";
    }
    document.getElementById("form").innerHTML = "Please choose a square";
    currentMove = playersGamePiece;
}


// Allowing player to choose squares
function chooseSquare(className) {
// Keep track of turn and alternate between turns and update the innerHTML to reflect move
    let square = document.querySelector(className);    
    square.innerHTML = currentMove;
    number = square.className;
    console.log(currentMove);
    console.log(square.className);
    console.log(number.innerHTML);
    if (currentMove == playersGamePiece) {
        currentMove = compGamePiece;
    } else { 
        currentMove = playersGamePiece;
    }
    determineWinner();
}

// If player or computer has 3 squares in a row end game and alert who is the winner.
 function determineWinner() {
    // Keep track of what player has what square and determine if one of the players has 3 in a row.
   if (number == 1 && number.innerHTML == playersGamePiece ) {
       alert("you win");
   } else {
       alert('you lost');
   }
// 


// function divsInArray( divs ) {
//     let divArray = [];
//     for ( var i = 0; i < divs.length; i++ ) {
//       divArray.push( divs[ i ].innerHTML );
//       console.log(divArray);
//     }  

//     divsInArray();