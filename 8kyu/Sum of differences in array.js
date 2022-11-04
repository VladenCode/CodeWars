// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

function sumOfDifferences(arr) {
  let result = 0;
  const arraySort = arr.sort(compare).reverse();
  console.log(arraySort)
  for(let i = 0; i < arraySort.length - 1 ; i++) {
    console.log(`${result} += ${arr[i]} - ${arr[i + 1]}`)
    result += (arraySort[i] - arraySort[i + 1])
    console.log(` Result is: ${result}`);
  }
  return result;
}
function compare(a,b) {
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
}

// Other solution

function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}