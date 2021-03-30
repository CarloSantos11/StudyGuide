// Create age(birthYear) method and make this more dynamic so we can get the current year and we will pass in our birth year and get our age.

// Make use of the Date().

// let getAge = function (birthYear) {
//     const d = new Date();
//     console.log(d.getFullYear() - birthYear);
// }

let getAge = birthYear =>
    console.log(new Date().getFullYear() - birthYear);

getAge(1987);