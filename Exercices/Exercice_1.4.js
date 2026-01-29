/*
Exercise 1.4: Initials Generator

Create a function getInitials that takes a full name and returns the initials in uppercase.
*/

const getInitials = (name) => {
  const names = name.split(" ");
  const initials = names.map((name) => name.charAt(0).toUpperCase());
  return initials.join("");
};
console.log(getInitials("jay rock")); // Output 'JR'
console.log(getInitials("Juan carlos vida diaz")); // Output 'JCVD'
