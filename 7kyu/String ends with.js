// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending) {
  // TODO: complete
  const lengthNum = str.length - ending.length;
  return str.substring(lengthNum) === ending ? true : false;
}
//[?]
/*
The substring() method returns the part of the string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.
*/

//Other solution:
function solution(str, ending) {
  return str.endsWith(ending);
}

//[?]
/*
The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
*/
