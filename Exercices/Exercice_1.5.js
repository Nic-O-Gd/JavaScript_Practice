/*
Exercise 1.5: Age Calculator

Create a function calculateAge that takes a birth year and returns the age.
Bonus: Handle invalid cases (future year, negative year).
*/

const calculateAge = (birthYear) => {
  const actualYear = 2026;
  const actualAge = actualYear - birthYear;
  if (birthYear > actualYear || birthYear < 1900) {
    return console.log("Sorry pal invalid year...");
  }
  return console.log(`You are ${actualAge} years old.`);
};
calculateAge(1991); // Output : 'You are 35 years old.'
calculateAge(2000); // Output : 'You are 26 years old.'
calculateAge(2056); // Output : 'Sorry pal invalid year...'
