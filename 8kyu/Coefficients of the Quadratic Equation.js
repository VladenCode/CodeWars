// In this Kata you are expected to find the coefficients of quadratic equation of the given two roots (x1 and x2).

// Equation will be the form of ax^2 + bx + c = 0

// Return type is a Vector (tuple in Rust, Array in Ruby) containing coefficients of the equations in the order (a, b, c).

// Since there are infinitely many solutions to this problem, we fix a = 1.

// Remember, the roots can be written like (x-x1) * (x-x2) = 0

// Example
// quadratic(1,2) = (1, -3, 2)
// This means (x-1) * (x-2) = 0; when we do the multiplication this becomes x^2 - 3x + 2 = 0


function quadratic(x1, x2){
// Answer in array
  const x = 1;
//   const equation = (x-x1)*(x-x2)
  const equation = `${(x*x)}+${(x*(-x1))+((-x2)*x)}+${((-x2)*(-x1))}`
  const arrayStr = equation.split('+');
  let arrayNum = [];
  arrayStr.forEach(str => {
      arrayNum.push(Number(str))
  });
  
  return arrayNum;
}

// Other solution

function quadratic(x1, x2){
   return [1, -(x2 + x1), (x1 * x2)];
}