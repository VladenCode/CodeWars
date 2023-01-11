// The number 898989 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number: 89=81+9289 = 8^1 + 9^289=8
// 1
//  +9
// 2

// The next number in having this property is 135135135:

// See this property again: 135=11+32+53135 = 1^1 + 3^2 + 5^3135=1
// 1
//  +3
// 2
//  +5
// 3

// Task
// We need a function to collect these numbers, that may receive two integers aaa, bbb that defines the range [a,b][a, b][a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

// Examples
// Let's see some cases (input -> output):

// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

// function sumDigPow(a, b) {
//   // Your code here
//   let resArr = [];
//   const arr = Array(b - a + 1).fill(0).map((_, i) => a + i);

//   arr.forEach( element => {
//       if(String(element).length === 1){
//           resArr.push(element)
//       } else {
//          const checkRes = String(element).split('').map((a,i) => Math.pow(a, i + 1));
//          if(checkRes.reduce((acc, cur) => acc + cur) === element){
//              resArr.push(element)
//          }
//       }
//   })
//   return resArr;
// }

function sumDigPow(a, b) {
  let arr = [];
  for (let i = a; i <= b; i++) {
    let sum = 0;
    for (let j = 0; j < String(i).length; j++) {
      sum += Math.pow(parseInt(String(i)[j]), j + 1);
      if (sum === i) {
        arr.push(i);
      }
    }
  }
  return arr;
}

// Other solution

function sumDigPow(a, b) {
  // Your code here
  let resArr = [];
  const arr = Array(b - a + 1)
    .fill(0)
    .map((_, i) => a + i);

  arr.forEach((element) => {
    if (String(element).length === 1) {
      resArr.push(element);
    } else {
      const checkRes = String(element)
        .split('')
        .map((a, i) => Math.pow(a, i + 1));
      if (checkRes.reduce((acc, cur) => acc + cur) === element) {
        resArr.push(element);
      }
    }
  });
  return resArr;
}
