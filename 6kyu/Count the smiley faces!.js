// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

//return the total number of smiling faces in the array
function countSmileys(arr) {
  const faces = [
    ':)',
    ';)',
    ':-)',
    ';-)',
    ';~)',
    ':~)',
    ':D',
    ';D',
    ':-D',
    ':~D',
    ';-D',
    ';~D',
  ];
  return arr.filter((a) => faces.some((e) => a.includes(e))).length;
}

// Other solution
function countSmileys(arr) {
  return arr.filter((x) => /^[:;][-~]?[)D]$/.test(x)).length;
}
