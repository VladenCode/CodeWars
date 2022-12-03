// There were and still are many problem in CW about palindrome numbers and palindrome strings. We suposse that you know which kind of numbers they are. If not, you may search about them using your favourite search engine.

// In this kata you will be given a positive integer, val and you have to create the function next_pal()(nextPal Javascript) that will output the smallest palindrome number higher than val.

// Let's see:

// For Javascript
// nextPal(11) == 22

function nextPal(val) {
  /* your code here */
  let nextPalindrome = val;
  let reversed;
  do {
    nextPalindrome++;
    reversed = Number(String(nextPalindrome).split('').reverse().join(''));
  } while (nextPalindrome !== reversed);
  return nextPalindrome;
}

// Other solution

const nextPal = (val) => {
  while (++val != [...`${val}`].reverse().join(``));
  return val;
};
