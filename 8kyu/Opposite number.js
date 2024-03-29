// DESCRIPTION:
// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

// function opposite(number) {
//   //your code here
//   return -(number);
// }

const opposite = (number) => -number;

//Other solution:

function opposite(number) {
  return number > 0 ? -number : Math.abs(number);
}
