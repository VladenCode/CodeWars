// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

function sumArray(array) {
  if (!array) {
    return 0;
  }
  return array
    .sort((a, b) => a - b)
    .slice(1, array.length - 1)
    .reduce((acc, cur) => acc + cur, 0);
}

//Other solution:

function sumArray(array) {
  array = array || [];
  return array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((a, b) => a + b, 0);
}
