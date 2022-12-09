// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

function isIsogram(str) {
  return str
    .toLowerCase()
    .split('')
    .every((e, i, a) => a.indexOf(e) === i);
}

// [?] - every() method:  Tests if every element in the array are the same kind we are testing for(based on the provided function passed in).
// [?] - some() method: Exact oposit of every(). The some() method tests whether at least one element in the array passes the test implemented by the provided function.

// Other solution:

function isIsogram(str) {
  return new Set(str.toUpperCase()).size == str.length;
}

//[?] Set objects let you store unique values, just as mathematical sets. So in theory if you store the word 'mooose' in a set it should have only 4 values for each unique word(m,o,s,e). With that you solve the part of 'counting' unique words. Afterwards you just compare the lenght of a set with the lenght of a passed string. If they match it means words are unique since set can only have unique values. Hope this clarifies it for you a bit.

/*Number example:

Set(2, 3, 4, 3, 3, 4, 5, 6, 3) will output following: 2, 3, 4, 5, 6 - so no same values allowed.*/
