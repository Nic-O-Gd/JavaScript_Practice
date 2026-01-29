/*
Exercise 2.3: FizzBuzz Function

Create a function fizzBuzz that takes a number and returns:

    "Fizz" if divisible by 3
    "Buzz" if divisible by 5
    "FizzBuzz" if divisible by both 3 AND 5
    The number itself otherwise
*/

const fizzBuzz = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  }
  if (num % 3 === 0) {
    return "Fizz";
  }
  if (num % 5 === 0) {
    return "Buzz";
  } else {
    return num;
  }
};
fizzBuzz(42); // Output 'Fizz'
fizzBuzz(94); // Output 94
fizzBuzz(15); // Output 'FizzBuzz'