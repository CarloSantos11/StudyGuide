// BMI Calculator & Comparison
// -Data #1-
let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;

function calculateBmi(userWeight, userHeight) {
    return (userWeight / (userHeight ** 2))
}
let markBmi = calculateBmi(markWeight, markHeight);
let johnBmi = calculateBmi(johnWeight, johnHeight);


function higherBmi(user1Bmi, user2Bmi) {
    let user1HigherBMI = user1Bmi > user2Bmi;
    if (user1HigherBMI) {
        console.log("Mark has a higher BMI")
    } else {
        console.log("John has a higher BMI")
    }
}
higherBmi(markBmi, johnBmi)


// -Data #2-
markWeight = 95;
markHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;


function calculateBmi(userWeight, userHeight) {
    return (userWeight / (userHeight ** 2))
}
let markBmi = calculateBmi(markWeight, markHeight);
let johnBmi = calculateBmi(johnWeight, johnHeight);


function higherBmi(user1Bmi, user2Bmi) {
    let user1HigherBMI = user1Bmi > user2Bmi;
    if (user1HigherBMI) {
        console.log("Mark has a higher BMI")
    } else {
        console.log("John has a higher BMI")
    }
}
higherBmi(markBmi, johnBmi)

//----------------------------------------------------------

// Team Average Score Calculator and Comparison
// -Part 1 & 2-
let dolphins = 96 + 108 + 89;
let koalas = 88 + 91 + 110;

function avgScore(team) {
    console.log(team / 3)
}
avgScore(dolphins);
avgScore(koalas);


let dolphinsAvg = dolphins / 3;
let koalasAvg = koalas / 3;

function higherAvgScore(team1Avg, team2Avg) {
    let team1HigherAvg = team1Avg > team2Avg;
    if (team1HigherAvg) {
        console.log("Dolphins Win");
    } else if (team1Avg === team2Avg) {
        console.log("It's a tie");
    } else {
        console.log("Koalas Win");
    }
}
higherAvgScore(dolphinsAvg, koalasAvg);

// -Bonus 1-
let dolphins = 97 + 112 + 101;
let koalas = 109 + 95 + 123;

function avgScore(team) {
    console.log(team / 3)
}
avgScore(dolphins);
avgScore(koalas);


let dolphinsAvg = dolphins / 3;
let koalasAvg = koalas / 3;

function higherAvgScore(team1Avg, team2Avg) {
    let team1HigherAvg = team1Avg > team2Avg;
    if (team1HigherAvg && team1Avg >= 100) {
        console.log("Dolphins Win");
    } else if (team1Avg === team2Avg) {
        console.log("It's a tie");
    } else if (!team1HigherAvg && team2Avg >= 100) {
        console.log("Koalas Win");
    } else {
        console.log("There is no winner");
    }
}
higherAvgScore(dolphinsAvg, koalasAvg);

// -Bonus 2-
let dolphins = 97 + 112 + 101;
let koalas = 109 + 95 + 106;

function avgScore(team) {
    console.log(team / 3)
}
avgScore(dolphins);
avgScore(koalas);


let dolphinsAvg = dolphins / 3;
let koalasAvg = koalas / 3;

function higherAvgScore(team1Avg, team2Avg) {
    let team1HigherAvg = team1Avg > team2Avg;
    if (team1HigherAvg && team1Avg >= 100) {
        console.log("Dolphins Win");
    } else if (team1Avg === team2Avg && team1Avg >= 100 && team2Avg >= 100) {
        console.log("It's a tie");
    } else if (!team1HigherAvg && team2Avg >= 100) {
        console.log("Koalas Win");
    } else {
        console.log("There is no winner");
    }
}
higherAvgScore(dolphinsAvg, koalasAvg);

//--------------------------------------------------------------------------------

//Tip Calculator Ternary Operator

function tipCalc(bill) {
    const tip = bill > 50 && bill < 300 ? (bill * 0.15) : (bill * 0.20);
    console.log(tip, tip + bill)
}
tipCalc(275);
tipCalc(40);
tipCalc(430);

//----------------------------------------------------------------------------
// Create a program that assigns your name as a variable 
// Print your name five times

function myName(name) {
    for (i = 0; i <= 5; i++) {
        console.log('Cami')
    }
}
myName('Cami')

//----------------------------------------------------------------------------

