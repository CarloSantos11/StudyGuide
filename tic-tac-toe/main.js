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
let winningCombos = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
let playersPicks = [];
let compPicks = [];



// Getting player's choice
function playersChoice() {
    playersGamePiece = document.querySelector("input").value.toUpperCase();
    // if (playersGamePiece !== "O" && playersGamePiece !== "X") {
    //     alert("Please enter an X or an O");
    //     playersGamePiece = "";
    if (playersGamePiece === "O") {
        compGamePiece = "X";
    } else if (playersGamePiece === "X") {     
        compGamePiece = "O";
    } else {
        alert("Please enter an X or an O");
        playersGamePiece = "";
        return ;
        // console.log(playersGamePiece);
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
    

    if (currentMove == playersGamePiece) {
        playersPicks.push(number);
        currentMove = compGamePiece;
        console.log(playersPicks);
 
    } else { 
        currentMove = playersGamePiece;
        compPicks.push(number);
        console.log(compPicks);
     }
     determineWinner();
 }



// function divsInArray( divs ) {
//     let divArray = [];
//     for ( var i = 0; i < divs.length; i++ ) {
//       divArray.push( divs[ i ].innerHTML );
//       console.log(divArray);
//     }  

//     divsInArray();