/*
LEVEL 1: Beginner (Fundamentals)

Exercise 1.1: Tip Calculator

Create a function calculateTip that takes two parameters:

    bill (the total amount of the bill)
    tipPercent (tip percentage, default 15%)

The function should return the total amount to pay.
*/

const calculateTip = (bill, tipPercent) => {
  const total = bill * (1 + tipPercent / 100);
  return console.log(`Total: $ ${total.toFixed(1)}`);
};
calculateTip(50, 15); // Output 'Total: $ 57.5'
calculateTip(50, 11); // Output 'Total: $ 55.5'
