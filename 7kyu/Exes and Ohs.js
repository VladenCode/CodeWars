// DESCRIPTION:
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  //code here
  let strArr = str.toLowerCase().split('');
  return (
    strArr.filter((x) => x === 'x').length ===
    strArr.filter((o) => o === 'o').length
  );
}

// function XO(str) {
//     //code here
//   let obj ={};
//   const strArr = str.toLowerCase().split('');
//   for(let i = 0; i< strArr.length; i++){
//     obj[strArr[i]] = (obj[strArr[i]] || 0) + 1
//   }
//   return (obj.x === obj.o) ? true : false;
// }
