// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

function cleanString(s) {
  const arr = s.split('');
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '#') {
      console.log(result);
      result.pop(result[i - 1]);
    } else {
      result.push(arr[i]);
    }
  }
  return result.join('');
}

//Other solution:

clean_string = (s) =>
  s.split('').reduce((r, e) => (e == '#' ? r.slice(0, -1) : r + e), '');

//[?]
/*
1. Creates an array of characters with split() method
2. Uses the reduce method to reduce the array of characters to one string(no need to join() method in the end) - concatenating the characters
3. Using ternary operator check if the current(e) character is a '#' or not. If so, using the slice() method it starts from the 0 index of the string and because of the -1 (goes to the back of the string) it slices of the last element of the string. If the current element (e) is not equal to '#', then it concatenates the character to the string. 
*/
