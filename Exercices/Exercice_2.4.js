/*
Exercise 2.4: Vowel Counter

Create a function countVowels that counts the number of vowels (a, e, i, o, u) in a string.
*/

const countVowels = (string) => {
  const vowels = string.match(/[aeyuio]/g);
  const count = vowels ? vowels.length : 0;
  console.log(`${string} got ${count} vowels : ${vowels}`);
  return count;
};
countVowels("JavaScript"); // Output 'JavaScript got 3 vowels : a,a,i'
