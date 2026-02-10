// Declare a variable num and assign a number between 1 and 20
let num = 8;

/*
Create a function named factorialCalculator:  
- This function takes one parameter (a number).
- It calculates the factorial of that number.
- The factorial of a number n is the product of all positive integers from 1 to n. 
For example, factorial of 5 (5!) is 5 * 4 * 3 * 2 * 1 = 120.
*/
const factorialCalculator = (num) => {
  let result = 1;
  let n = 1;           // Initialize a counter variable
  while (n <= num) {   // Use a while loop to multiply result by i from 1 to number
    result *= n;
    n++;
  }
  return result;
}

const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg); // Output 'Factorial of 8 is 40320'
