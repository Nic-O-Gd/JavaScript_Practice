/**
Build a String Repeating Function
Create a function that repeats a given string a specific number of times. DO NOT USE the built-in .repeat() method.
- You should create a function named repeatStringNumTimes that takes two parameters: a string and a number.
- The function should return the string repeated the specified number of times.
- If the number is less than or equal to zero, the function should return an empty string.
*/
let num = 8;
const repeatStringNumTimes = (strg, num) => {
   if (num <= 0) {
    return '';
  }
  let result = '';
  let i = 0;
  while (i < num) {
    result += strg;
    i++;
  }
  return result;
}