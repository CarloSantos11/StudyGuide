// output:
//     Hello good morning Frank Fort
//     Hello good morning Ben Crawbarry
//     Hello good morning Willma Crawbarry
//     Hello good morning Fiona Sueno

let people = [
  {
    first_name: "Frank",
    last_name: "Fort",
  },
  {
    first_name: "Ben",
    last_name: "Crawbarry",
  },
  {
    first_name: "Willma",
    last_name: "Crawbarry",
  },
  {
    first_name: "Fiona",
    last_name: "Sueno",
  },
];

// function getFullName() {
//   for (let i = 0; i < people.length; i++) {
//     let fullname = `Hello, good morning ${
//       (people[i].first_name}  ${people[i].last_name})
//     }`;
//     console.log(fullname);
//   }
//   getFullName();

// function mapGreetPeople() {
//   people.map(
//     (person) => `Hello, good morning ${(person.first_name, person.last_name)}`
//   );
// }
// console.log(mapGreetPeople());

// Using the same data structure create a method called delete that takes in the data structure as an argument and a first name to delete if selected. The function should return the data structure with the entry removed. (Consider the Filter method)

// var ages = [32, 33, 16, 40];

// function checkAdult(age) {
//   return age >= 18;
// }

// function myFunction() {
//   document.getElementById("demo").innerHTML = ages.filter(checkAdult);
// }

// function deleteName(person, name) {
//   console.log(person, name);
//   if (person.first_name === name) {
//     return false;
//   } else return true;
// }

// function myFunction(name) {
//   console.log(people.filter(deleteName(person, name)));
// }

function deleteCharacter(name) {
  return people.filter((person) => person.first_name !== name);
}

console.log(deleteCharacter("Ben"));

// Using the same data structure create a method called select that takes in the data structure as an argument and a name as the second argument. The method should return an array with a single object.

// function selectPerson(name) {
//   return people.filter((person) => person.first_name === name);
// }

// console.log(selectPerson("Fiona"));
