// An infinite number of shelves are arranged one above the other in a staggered fashion.
// The cat can jump up to 3 shelves at the same time: from shelf 1 to shelf 2 or 4 (the cat cannot climb on the shelf directly above its head), according to the illustration:
// Input
// Start and finish shelf numbers (always positive integers, finish no smaller than start)

// Task
// Find the minimum number of jumps to go from start to finish

// Example
// Start 1, finish 5, then answer is 2 (1 => 4 => 5 or 1 => 2 => 5)

function solution(start, finish) {
  let count = 0;
  while (start < finish) {
    if (start + 3 <= finish) {
      start += 3;
      count++;
    } else {
      start++;
      count++;
    }
  }
  return count;
}

// Other solution

function solution(start, finish) {
  //there are 2 hop types.
  //Total number of hops is a sum of the two types.

  //first, lets calculate the 3 hops. That's Math.floor((end-start)/3).
  let threeHops = Math.floor((finish - start) / 3);

  //second lets calculate the 1 hops. (end-start)%3 for that.
  let oneHops = (finish - start) % 3;

  //sum and return the # of hops.
  return threeHops + oneHops;
}
