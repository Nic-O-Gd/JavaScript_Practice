// checks if string1 ends with string2 by comparing last part of string1 with string2
const confirmEnding = (string1, string2) => {
  const startIndex = string1.length - string2.length;
  const ending = string1.substring(startIndex); return ending === string2;
}
