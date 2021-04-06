// Count up to any given number
// Only print the odd numbers
// If the number is even  print "the word is even"

// let num = 0;

// while (num < 100) {
//     num++;
//     if (num % 2  == 0) {
//         console.log("The number is even");
//     } else {
//         console.log(num);
//     }
// }


function evenOdd(num) {
    while (num < 100) {
        num++;
        if (num % 2  == 0) {
            console.log("The number is even");
        } else {
            console.log(num);
        }
    }
}
evenOdd(35);

//Carlo's code
// Function Definition
function countOdd(limit) {
  for(let i = 0; i <= limit; i++){
    if(i % 2 != 0){ // if i / 2 does not == 0
      console.log(i)
    }else {
      console.log("even");
    }
    
  }
}

// Function Call
countOdd(100);

