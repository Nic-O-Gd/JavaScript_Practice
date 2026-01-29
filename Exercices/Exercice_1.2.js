/*
Exercise 1.2: Password Validator

Create a function isPasswordValid that checks if a password:

    Has at least 8 characters
    Contains at least one digit

Return true or false.
*/

const isPasswordValid = (password) => {
  const hasNumber = /\d/.test(password);
  if (password.length >= 8 && hasNumber) {
    return console.log("Password Valid !");
  } else {
    return console.log(
      "Password must be at least 8 characters and contain at least one number.",
    );
  }
};
isPasswordValid("asdfgf2h"); // Output 'Password Valid !'
isPasswordValid("kdwio3"); // Output 'Password must be at least 8 characters and contain at least one number.'