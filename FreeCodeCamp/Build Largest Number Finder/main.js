/**
 * Build the Largest Number Finder that returns an array consisting of the largest number from each provided sub-array.
 * You should create a function largestOfAll that takes an array of arrays as an argument.
 * The function should return an array containing the largest number from each sub-array.
 */

const largestOfAll = (array) => {
  let result = [];
 for (let i = 0; i < array.length; i++) {
   let max = Math.max(...array[i]);
   result.push(max)
 }
  return result
};
largestOfAll([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]); // Output [27, 5, 39, 1001]
largestOfAll([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]); // Output [9, 35, 97, 1000000]
largestOfAll([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]); // 
