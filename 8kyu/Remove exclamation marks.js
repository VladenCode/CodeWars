// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  return s
    .split('')
    .map((e) => e.replace('!', ''))
    .join('');
}

// Other solution
function removeExclamationMarks(s) {
  return s.split('!').join('');
}
