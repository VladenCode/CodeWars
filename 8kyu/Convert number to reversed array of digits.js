// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitize(n) {
  //code here
  const array = String(n).split('').map(str => Number(str));
  return array.reverse();
}

// Other solution

function digitize(n) {
  return String(n).split('').map(Number).reverse();
}