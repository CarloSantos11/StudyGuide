let markWeight = 78;
let johnWeight = 92;
let markHeight = 1.69;
let johnHeight = 1.95;

function calcBMI(weight, height) {
   return (Math.floor(weight / (height ** 2)));
}

let markBMI = calcBMI(markWeight, markHeight);
let johnBMI = calcBMI(johnWeight, johnHeight);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI(${markBMI}) is higher than John's BMI(${johnBMI}).`);
} else {
    console.log(`John's BMI(${johnBMI}) is higher than Mark's BMI(${markBMI}).`);
}