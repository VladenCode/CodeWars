// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alphabetPosition(text) {
  let arrText = text
    .toLowerCase()
    .replace(/[^A-Z]/gi, '')
    .split('');

  return arrText.map((e) => (e = e.charCodeAt() - 96)).join(' ');
}

// Other solution
let alphabetPosition = (text) =>
  text
    .toUpperCase()
    .replace(/[^A-Z]/g, '')
    .split('')
    .map((ch) => ch.charCodeAt(0) - 64)
    .join(' ');
