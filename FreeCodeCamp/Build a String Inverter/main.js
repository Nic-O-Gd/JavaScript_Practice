/**
 * Build a String Inverter that reverses the characters of a given string.
 * For example, "hello" should become "olleh".
 * You should create a function named reverseString that takes a string as an argument.
 * The function should return the reversed string.
 */

const reverseString = (string) => {
  let reversed = string.split('').reverse().join('');
  return reversed
}
reverseString("hello");  // Output 'olleh'
reverseString("Howdy"); // Output 'ydwoH'
reverseString("Greetings from Earth"); // Output 'htraE morf sgniteerG'