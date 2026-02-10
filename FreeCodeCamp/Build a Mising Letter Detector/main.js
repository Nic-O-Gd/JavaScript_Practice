/**
Build a Missing Letter Detector

- You should have a function named fearNotLetter.
- The fearNotLetter function should accept one argument: a string representing a range of letters in alphabetical order which can have one letter missing.
- The function should find the missing letter in the passed letter range and return it.
- If all letters are present in the range, the function should return undefined.
*/
const fearNotLetter = (strg) => {
  for (let i = 0; i < strg.length - 1; i++) {
    if (strg.charCodeAt(i + 1) !== strg.charCodeAt(i) + 1) {
      return String.fromCharCode(strg.charCodeAt(i) + 1);
    }
  }
  return undefined;
}


fearNotLetter("stvwx");
fearNotLetter("bcdf");
fearNotLetter("abcdefghijklmnopqrstuvwxyz");