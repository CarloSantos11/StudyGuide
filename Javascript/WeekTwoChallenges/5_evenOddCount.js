// Count up to any given number
// Only print the odd numbers
// If the number is even  print "the word is even"

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

