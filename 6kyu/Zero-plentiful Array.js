// An array is called zero-plentiful if it contains multiple zeros, and every sequence of zeros is at least 4 items long.

// Your task is to return the number of zero sequences if the given array is zero-plentiful, oherwise 0.

//Exp:

// [0, 0, 0, 0, 0, 1]  -->  1
// # 1 group of 5 zeros (>= 4), thus the result is 1

// [0, 0, 0, 0, 1, 0, 0, 0, 0]  -->  2
// # 2 group of 4 zeros (>= 4), thus the result is 2

// [0, 0, 0, 0, 1, 0]  -->  0
// # 1 group of 4 zeros and 1 group of 1 zero (< 4)
// # _every_ sequence of zeros must be at least 4 long, thus the result is 0

// [0, 0, 0, 1, 0, 0]  -->  0
// # 1 group of 3 zeros (< 4) and 1 group of 2 zeros (< 4)

// [1, 2, 3, 4, 5]  -->  0
// # no zeros

// []  -->  0
// # no zeros

//Other solution:

function zeroPlentiful(arr) {
  let groupNum = 0;
  let countZero = 0;

  for (const num of arr) {
    if (num === 0) {
      // P1
      if (countZero++ === 3) {
        groupNum++;
      }
      //P2
    } else {
      if (countZero > 3) {
        countZero = 0;
        // P3
      } else if (countZero > 0) {
        countZero = 0;
        groupNum = 0;
        break;
      }
    }
  }
  //P4
  return countZero > 0 && countZero < 4 ? 0 : groupNum;
}

//[?]
/*
P1 - Point is to increment the counter. He uses the postfix (the increment operator increments and returns the value before incrementing. So first it check if '3 === 3' and after increments to 4 )
P2 - here if the num is not '0', check if countZero is 4. If so, goes to zero.
P3 - if de num is not 0 and the countZero is less then 4 countZero and groupNum becomes 0 and breaks out of the loop.
P4 - This ihow it check if in the end we did not have a full sequence of 4. 
*/
