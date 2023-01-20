// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

function cleanString(s) {
  const arr = s.split('');
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '#') {
      console.log(result);
      result.pop(result[i - 1]);
    } else {
      result.push(arr[i]);
    }
  }
  return result.join('');
}

//Other solution:

clean_string = (s) =>
  s.split('').reduce((r, e) => (e == '#' ? r.slice(0, -1) : r + e), '');
