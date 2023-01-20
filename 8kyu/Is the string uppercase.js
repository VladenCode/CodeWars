// DESCRIPTION:
// Is the string uppercase?
// Task
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

String.prototype.isUpperCase = function () {
  // your code here
  return this == this.toUpperCase() ? true : false;
};

//Other soluiton:
String.prototype.isUpperCase = function () {
  return this.toUpperCase() === this.toString();
};

//[?]
/*
1/DO KNOW. Double equals only compares the VALUES, whereas triple equals compares the TYPES and the VALUES. The first version work, because the values of 'this' and 'this.toUpperCase()' are EQUALS. However, the type of 'this' is actually an OBJECT, whereas 'this.toUpperCase()' is a STRING.

2/ no need for ternary operator, after evaluation it will return true or false as a result.
*/
