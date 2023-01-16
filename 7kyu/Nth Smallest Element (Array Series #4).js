// DESCRIPTION:
// Introduction and warm-up (highly recommended): Playing With Lists/Arrays Series

// Task
// Given an array/list of integers, find the Nth smallest element in the array.

// Notes
// Array/list size is at least 3.
// Array/list's numbers could be a mixture of positives , negatives and zeros.
// Repetition in array/list's numbers could occur, so don't remove duplications.
// Input >> Output Examples
// arr=[3,1,2]            n=2    ==> return 2
// arr=[15,20,7,10,4,3]   n=3    ==> return 7
// arr=[2,169,13,-5,0,-1] n=4    ==> return 2
// arr=[2,1,3,3,1,2],     n=3    ==> return 2

function nthSmallest(arr, pos) {
  //your code here
  let n;
  for (let i = 0; i < pos; i++) {
    n = Math.min(...arr);
    arr.splice(arr.indexOf(n), 1);
  }
  return n;
}

// Other solution:

function nthSmallest(arr, pos) {
  let sorted = arr.sort((a, b) => a - b);

  return sorted[pos - 1];
}
//I believe this is not the best solution, becuse if somebody whants the last smallest number of the array (meaning the biggest number in the array for some reason) it can`t reach it with the last index number of the array (will be subtracted - 1).
