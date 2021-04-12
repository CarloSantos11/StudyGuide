// Loop through each array. Find Islands
// Create a data structure of island plots



let numIslands = function(grid) {
    let island = "1";
    let ocean = "0";
    let canTravel = false;
    let islandCoords = []

    grid.forEach((element, index) => {
      element.forEach( (innerElement, innerIndex) => {
        if ((grid[index][innerIndex]) === island) {
          islandCoords.push([index,innerIndex]); 
        }
      })
    }) 
    console.log(islandCoords); 
};


let travelIslands = function(islands){
  islands.each
}

numIslands([
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","1"]
]);

// islandCoords [
//   [0,0], [0,1], 
// ]