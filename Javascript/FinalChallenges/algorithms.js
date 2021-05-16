// Count the total of each number and divde by two
// Then after figuring out the number of pairs for each color
// Then add all the total pairs of socks together


// function countSockPairs(arr, n) {

// }




let testOne = [1,2,1,2,1,3,2,1,1,1,3,3];
let textTwo = [];


countSockPairs(testOne, testOne.length);

function countSockPairs(arr, n) {
    let socks = {};
    arr.sort();

    let current = null;
    let cnt = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != current) {
            if (cnt > 0) {
                socks[current] = Math.floor(cnt/2);
            }
            current = arr[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        socks[current] = Math.floor(cnt/2);
        
    }
    console.log(socks);
    return console.log(Object.values(socks).reduce((total, pair) => total + pair));
    
}

