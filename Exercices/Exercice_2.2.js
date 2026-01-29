/*
Exercise 2.2: Improved Email Validator

Enhance your email masker by first creating a function isValidEmail that verifies:

   • Contains exactly one @
   • Has a domain (part after @)
   • The domain contains a .
*/

const isValidEmail = (email) => {
  const regex = /^[^@]+@[^@]+\.[^@]+$/;
  /*
    /^ : beginning of pattern.
    [^@]+ : char before @ and !@
    @ : @ symbol
    [^@]+ : domain before dot
    \. : dot
    [^@]+ : domain after dot
    $/ : end of the pattern.

*/
  return regex.test(email);
};
isValidEmail("adad@domain.com"); // Output true
isValidEmail("isatamail.com"); // Output false
