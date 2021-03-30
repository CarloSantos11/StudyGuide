/* For a new game scores for player and computer are
   set to 0.
   -Player chooses either rock, paper, or scissors.
   -Computer then randomly chooses.
   -If player chooses rock and comp chooses paper - comp wins
   -If player chooses rock and comp chooses scissors - player wins
   -If player and comp both choose rock - alert(it's a draw),
   -Use this logic for the other possible choice combos.
   -Increment scores according to who wins.
   */

let player = 0;
let computer = 0;

// let rock = 0;
// let paper = 1;
// let scissors = 2;
let compPick;

function compChoice() {
  let randNum = Math.floor(Math.random() * Math.floor(3));
  console.log(randNum);
  if (randNum === 2) {
    compPick = "scissors";
    console.log(compPick);
    document.getElementById("rightSide").style.backgroundImage =
      "url('images/rawscissors.jpg')";
  } else if (randNum === 1) {
    compPick = "paper";
    console.log(compPick);
    document.getElementById("rightSide").style.backgroundImage =
      "url('images/paper_rolls.jpg')";
  } else if (randNum === 0) {
    compPick = "rock";
    console.log(compPick);
    document.getElementById("rightSide").style.backgroundImage =
      "url('images/big_rock.jpg')";
  }
  return compPick;
}

function pickedRock() {
    document.getElementById("leftSide").style.backgroundImage =
    "url('images/big_rock.jpg')";
  compChoice();
  if (compPick === "rock") {
    document.getElementById("winner").innerHTML = "It's a draw.";
    // alert("It's a draw.");
  } else if (compPick === "scissors") {
    document.getElementById("winner").innerHTML = "You Won!";
    document.getElementById("playerScore").innerHTML = player++;
    // alert("You Won!");
  } else {
    document.getElementById("winner").innerHTML =
      "Sorry bud, you lost this round.";
    document.getElementById("compScore").innerHTML = computer++;
    // alert("Sorry bud, you lost this round.");
  }
}

function pickedPaper() {
    document.getElementById("leftSide").style.backgroundImage =
    "url('images/paper_rolls.jpg')";
  compChoice();
  if (compPick === "paper") {
    document.getElementById("winner").innerHTML = "It's a draw.";
    // alert("It's a draw.");
  } else if (compPick === "rock") {
    document.getElementById("winner").innerHTML = "You Won!";
    document.getElementById("playerScore").innerHTML = player++;
    // alert("You Won!");
  } else {
    document.getElementById("winner").innerHTML =
      "Sorry bud, you lost this round.";
    document.getElementById("compScore").innerHTML = computer++;
    // alert("Sorry bud, you lost this round.");
  }
}

function pickedScissors() {
    document.getElementById("leftSide").style.backgroundImage =
    "url('images/rawscissors.jpg')";
  compChoice();
  if (compPick === "scissors") {
    document.getElementById("winner").innerHTML = "It's a draw.";
    // alert("It's a draw.");
  } else if (compPick === "paper") {
    document.getElementById("winner").innerHTML = "You Won!";
    document.getElementById("playerScore").innerHTML = player++;
    // alert("You Won!");
  } else {
    document.getElementById("winner").innerHTML =
      "Sorry bud, you lost this round.";
    document.getElementById("compScore").innerHTML = computer++;
    // alert("Sorry bud, you lost this round.");
  }
}

function resetScores() {
  document.getElementById("playerScore").innerHTML = 0;
  player = 0;
  document.getElementById("compScore").innerHTML = 0;
  computer = 0;
  document.getElementById("winner").innerHTML = "";
}
