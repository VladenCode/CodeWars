// Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

// Example
// input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
// ouptut: 5

// Resource: https://amjustsam.medium.com/how-to-find-most-frequent-item-of-an-array-12015df68c65

function mostFrequentItemCount(collection) {
  // Do your magic. :)

  let counts = {};
  let compare = 0;
  let mostFrequent;

  if (collection.length === 0) {
    return 0;
  }

  collection.forEach((e) => {
    let element = e;

    if (counts[element] === undefined) {
      counts[element] = 1;
    } else {
      counts[element] += 1;
    }

    if (counts[element] > compare) {
      compare = counts[element];
      mostFrequent = compare;
    }
  });
  console.log(counts);
  return mostFrequent;
}

// Other solution

function mostFrequentItemCount(collection) {
  if (collection.length === 0) return 0;

  var count = Object.create(null);

  collection.forEach((item) => {
    count[item] = (count[item] || 0) + 1;
  });

  return Math.max(...Object.values(count));
}
