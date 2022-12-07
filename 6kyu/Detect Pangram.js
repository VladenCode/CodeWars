// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
  const arrStr = string.toLowerCase().split('');
  const filteredArr = arrStr.filter((e, i) => arrStr.indexOf(e) === i);
  const newString = filteredArr.join('').replace(/[^A-Za-z]+/g, '');
  return newString.length === 26 ? true : false;
}

// Other solution (goal to get here...need to look up regex! Can do so here: https://regexr.com/)

function isPangram(string) {
  return (string.match(/([a-z])(?!.*\1)/gi) || []).length === 26;
}
