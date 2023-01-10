// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function
// function solution(string) {
//     const strArr = string.split('');
//     for(let i=0 ; i< strArr.length; i++){
//         if(strArr[i] === strArr[i].toUpperCase()){
//             strArr[i] = ` ${strArr[i]}`
//         }

// }
// return strArr.join('')
// }

// function solution(string) {
//     return string.split('').map(e => {
//         if(e === e.toUpperCase()) {
//             return ` ${e}`
//         } else {
//             return e
//         }
//         }).join('')
// }

function solution(string) {
  return string
    .split('')
    .map((e) => {
      return e === e.toUpperCase() ? ` ${e}` : e;
    })
    .join('');
}

//Other solution:

// complete the function
function solution(string) {
  const strArr = string.split('');
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === strArr[i].toUpperCase()) {
      strArr[i] = ` ${strArr[i]}`;
    }
  }
  return strArr.join('');
}
