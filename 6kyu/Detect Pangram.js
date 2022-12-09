// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
  const arrStr = string.toLowerCase().split('');
  const filteredArr = arrStr.filter((e, i) => arrStr.indexOf(e) === i);
  const newString = filteredArr.join('').replace(/[^A-Za-z]+/g, '');
  return newString.length === 26 ? true : false;
}

/*
[?]:  
The regex menaing(/[^A-Za-z]+/g):
    - /.../ : syntax of regex
    - "A-Za-z" : will match strings that "begin with" any number (including zero) of letters or spaces.
    - ^ means : 'start of string'
    - + means : 'one or more', so it won't match zero characters.
    - /g means : The 'g' flag indicates that the regular expression should be tested against all possible matches in a string. Without the 'g' flag, it'll only test for the first.
*/

// Other solution (goal to get here...need to look up regex! Can do so here: https://regexr.com/)

function isPangram(string) {
  return (string.match(/([a-z])(?!.*\1)/gi) || []).length === 26;
}
