// DESCRIPTION:
// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!

function expandedForm(num) {
  // Your code here
  let arrStr = [];
  const zero = '0';
  let count = 1;
  const arr = Array.from(String(num));
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== '0') {
      arrStr.push(`${arr[i]}${zero.repeat(arr.length - count)}`);
      count++;
    } else {
      count++;
    }
  }
  return arrStr.join(' + ');
}

//Others solution:

const expandedForm = (n) =>
  n
    .toString()
    .split('')
    .reverse()
    .map((e, i) => e * Math.pow(10, i))
    .filter((e) => e > 0)
    .reverse()
    .join(' + ');
