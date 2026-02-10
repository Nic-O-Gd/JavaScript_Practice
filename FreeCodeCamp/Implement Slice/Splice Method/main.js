const frankenSplice = (arr1, arr2, index) => {
  // Make a copy of arr2 to avoid mutating the original array
  const result = arr2.slice();

  // Use splice() to insert arr1 at the specified index
  result.splice(index, 0, ...arr1);

  return result;
};

frankenSplice([1, 2, 3], [4, 5], 1);
frankenSplice([1, 2], ["a", "b"], 1);
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);
frankenSplice([1, 2, 3, 4], [], 0);

