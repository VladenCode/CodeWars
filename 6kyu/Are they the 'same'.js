// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

function comp(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return false;
  }

  const arrSqrt = array2.map((e) => Math.sqrt(e));
  return array1.sort().join(',') === arrSqrt.sort().join(',') ? true : false;
}

// Other solution

function comp(a, b) {
  return (
    !!a &&
    !!b &&
    a
      .map((x) => x * x)
      .sort()
      .join() == b.sort().join()
  );
}
//[?]
/*
- double negation:

    !x -> will give true if x is falsy, otherwise false;

    So the double negation will convert a truthy value to true, and a falsy value (for example null) to false.
*/
