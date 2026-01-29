/*
Exercise 2.5: Slug Generator

Create a function createSlug that transforms a title into a URL-friendly slug:

   • All lowercase
   • Spaces replaced by hyphens
   • Special characters removed
*/

const createSlug = (string) => {
  const stringLowerCase = string.toLowerCase().trim();
  const stringAttached = stringLowerCase.replace(/\s+/g, "-");
  /* 
    /\s+/g:     Finds all sequences of whitespace characters.
    / & / :     Delimiters that specify the start and end of the regex pattern.
      \s  :     Matches any whitespace character (spaces, tabs, newlines).
      +   :     Quantifier that matches one or more of the preceding token (\s). So, it matches sequences of one or more whitespace characters.
      g   :     Global flag, meaning it will find all matches in the string, not just the first one.

  */
  const cleanStringSlug = stringAttached.replace(/[^\w-]/g, "");
  /*
        /[^\w-]/g        :  Finds all characters that are not alphanumeric, underscore, or hyphen.
          / & /          :  Regex delimiters.
            []           :  Character class, matches any one character inside.
    ^ inside the brackets:  Negates the character class, meaning it matches any character not listed.
            \w           :  Matches any "word" character: letters (a-z, A-Z), digits (0-9), and underscore (_).
            -            :  Literally matches a hyphen character.
            g            :  Global flag, to match all such characters in the string.

  */
  return cleanStringSlug;
};
createSlug(" From SOFtware gAMES"); // Output 'from-software-games'
createSlug("kiWi waterMelon! gRapes! pinEapple MANGO!"); // Output 'kiwi-watermelon-grapes-pineapple-mango'
createSlug("HTML CSS^ JavaScript Web@ DEv"); // Output 'html-css-javascript-web-dev'
