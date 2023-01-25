// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
  // your code
  const newStr = (s1 + s2).split('').sort();
  return newStr.filter((e, i) => i === newStr.indexOf(e)).join('');
}

//Other solution:

const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join('');

//[?]
/*
Good explication:

Set is a special kind of Object which stores unique values. This way, when you make a "new Set()" out of the concatenated strings, it will reduce every repeated character to a single value in the Set object.

Because "Set" is an Object, you can't just sort() it, since it is a method for arrays. Yet, the Set is an "iterable" object - that means it kind of behaves like arrays for some stuff:

Unlike other objects that are not iterable (for example: { a: 1, b: 2 }), you can use the spread operator (...) to attribute/add all Set's values to an array.

So when the code goes "[...new Set(s1+s2)]" it is creating a new array "[]" out of "..." a new Set object "new Set()" made of the concatenation of s1 and s2 strings "s1+s2".

You can also use the spread (...) operaton on the string value, to break it down into an array of every letter. 
But on this solution, Set breaks it down to every letter and the spread operator (...) works to copy the Set object's values to an array which then can be sorted and joined into a string once again.
*/
