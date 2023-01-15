// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// function count (string) {  
//   // The function code should be here
//    const obj = {};
//    const arr = string.split('')
//    for(let i = 0; i < arr.length; i++){
//        obj[arr[i]] = (obj[arr[i]] || 0) + 1
//    }
//    return obj;
// }

const count = (string) => {
  const obj = {};
  string.split('').forEach(e => obj[e] = (obj[e] || 0) + 1)
  return obj;
  }

  //Other solution:

