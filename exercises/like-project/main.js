/*
- Set up a button that counts up by 1 each time
  it's clicked.
- Set up a button that counts down by 1 each time
  it's clicked.
*/

let likesCount = 0;

function countLikes() {
  likesCount++;
  console.log(likesCount);
  document.getElementById("likes").innerHTML = likesCount;
}



let dislikesCount = 0;

function countDislikes() {
  dislikesCount++;
  console.log(dislikesCount);
  document.getElementById("dislikes").innerHTML = dislikesCount;
}

