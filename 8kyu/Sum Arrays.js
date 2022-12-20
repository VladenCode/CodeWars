// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

function sum(numbers) {
  return numbers.length !== 0 || numbers < 0
    ? numbers.reduce((a, b) => a + b)
    : 0;
}

// Other solution

function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
//[?]
/*
You could also write it like this:

function sum(numbers) { 
  return numbers.reduce((accumulator, element) => accumulator + element, 0);
}

- 0 sets the default value for our accumulator. our parameter element is being passed each value of the array per iteration.

- we would have our accumulator 0 + first element our accumulator now holds the sum (of 0 + first element) and our element holds the second num of the array => first num + second num
accumulator now holds the sum of our first and second nums. => sum + third num
and so on, until each element of the array has been added to our accumulator which will then return the sum of all elements of the array.

- So setting the accumulator to 0 is to avoid an error in case of an empty array, so the array always returns at least 0.
*/
