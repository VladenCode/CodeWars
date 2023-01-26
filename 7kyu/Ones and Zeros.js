/*
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:
Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11

However, the arrays can have varying lengths, not just limited to 4. 

*/

// const binaryArrayToNumber = arr => {
//   // your code
//   return parseInt(arr.join(''), 2)
// };

const binaryArrayToNumber = (arr) => parseInt(arr.join(''), 2);

//Other solution:

function binaryArrayToNumber(arr) {
  return arr.reduce((a, b) => (a << 1) | b);
}

//[?]
/*
- '<<' is the bitwise left shift operator, and '|' is the bitwise OR operator. 
 
- Bitwise operations in JavaScript convert all numbers to 32-bit signed integers, so this wouldn't work on numbers greater than 2,147,483,647.

- Anyway, as an example, take the number 42. The Array passed in to our function will be [1, 0, 1, 0, 1, 0].

Reduce operates from left to right, and since we didn't specify a starting value for the accumulator, it will just be the left-most element in the Array, or 1. Bitwise operation has left-to-right associativity, and also << has a higher precedence than |, so the << is processed before the |.

So then we have:

Operation         Accumulator    Remaining Array
=========         ===========    ===============
none              1              [0, 1, 0, 1, 0]
1 << 1 | 0        10             [1, 0, 1, 0]
10 << 1 | 1       101            [0, 1, 0]
101 << 1 | 0      1010           [1, 0]
1010 << 1 | 1     10101          [0]
10101 << 1 | 0    101010         []

Reduce will return the 32-bit signed integer which is stored in memory as the bits 101010, or 42.

Hope that helps.
*/
