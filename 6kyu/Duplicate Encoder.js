// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word) {
  // ...
  let obj = {};
  const arr = word.toLowerCase().split('');
  arr.forEach((e) => {
    obj[e] = (obj[e] || 0) + 1;
  });
  for (let prop in obj) {
    obj[prop] > 1 ? (obj[prop] = ')') : (obj[prop] = '(');
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in obj) {
      arr[i] = obj[arr[i]];
    }
  }
  return arr.join('');
}

//Other solution:

function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split('')
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')';
    })
    .join('');
}

//[?]
/*
1/indexOf() - The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

2/lastIndexOf() - The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

This is where the magic happens. He compares if the index of the current element is equal to it's last index form behind. If you have one element, then it is eaqual and it populates the new array with '('. If there is two or more of the same item in array, checking it from the front and the back will get a different index number and will add ')' to the new array.
*/
