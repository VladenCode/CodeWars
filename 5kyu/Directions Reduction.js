// Once upon a time, on a way through the old wild mountainous west,…
// … a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

// Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadful weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

// How I crossed a mountainous desert the smart way.
// The directions given to the man are, for example, the following (depending on the language):

// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
// or
// { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
// or
// [North, South, South, East, West, North, West]

//Other solution:
function dirReduc(plan) {
  var opposite = {
    NORTH: 'SOUTH',
    EAST: 'WEST',
    SOUTH: 'NORTH',
    WEST: 'EAST',
  };
  return plan.reduce(function (dirs, dir) {
    if (dirs[dirs.length - 1] === opposite[dir]) {
      dirs.pop();
    } else {
      dirs.push(dir);
    }
    return dirs;
  }, []);
}

//[?]
/*
1/He creates an object of key-value pairs.

2/Becase we need to reduce our array to the correct directions, he uses the reduce() method where /dirs - is the accumulator/ and  /dir - is the current element/

3/ In the reduce method the if condition check the last element in our new array (starting with an empty array in reduce method [] - this is basically our accumulator) and the current elements object value. 

4/ If ther are equal it pops of the last element of our dirs[] accumulator array. If not equal, it pushes a new element into our dirs[] array.

5/ Then we need to return the dirs[] array so that it will use the updated array
*/
