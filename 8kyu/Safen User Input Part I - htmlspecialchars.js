// Mission
// Your mission is to implement a function that converts the following potentially harmful characters:

// < --> &lt;
// > --> &gt;
// " --> &quot;
// & --> &amp;
// Good luck :D


function htmlspecialchars(formData) {
  // Insert your code here
  let newString = '';
  for(let i = 0; i < formData.length; i++) {

    switch(formData[i]) {
        case '<':
        newString += '&lt;';
        break;
        case '>':
        newString += '&gt;';
        break;
        case '"':
        newString += '&quot;';
        break;
        case '&':
        newString += '&amp;';
        break;
        default:
        newString += formData[i];
    }
  }
  return newString;
}

// Other solution

function htmlspecialchars(formData) {
  return formData.replace(/&/g, "&amp;")
                 .replace(/"/g, "&quot;")
                 .replace(/</g, "&lt;")
                 .replace(/>/g, "&gt;");
}

// Here is used the method replace() that will creat a NEW string with one, some, or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.

//RegExp or Regula Expression object is used for matching text with a pattern. Create with literal notation (two slashes, followed by optional flags) or constructor (takes either a string or a RegExp object as its first parameter and a string of optional flags as its second parameter.)