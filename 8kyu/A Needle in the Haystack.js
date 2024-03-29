// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle,

// function findNeedle(haystack) {
//   // your code here
//   const needlePosition = haystack.indexOf('needle')
//   if(needlePosition !== -1){
//     return `found the needle at position ${needlePosition}`
//   } else{
//     return 'No needle in the haystack'
//   }
// }

function findNeedle(haystack) {
  // your code here
  const needlePosition = haystack.indexOf('needle');
  return needlePosition !== -1
    ? `found the needle at position ${needlePosition}`
    : 'No needle in the haystack';
}

// Other solution:
function findNeedle(haystack) {
  return 'found the needle at position ' + haystack.indexOf('needle');
}

// This is a good solution (for the task), just this does not take into account if there is no needle item in the array.:)
