/* 
Build a Longest Word Finder App

In this lab, you will build a function that returns the length of the longest word in the provided sentence.

For example, in the sentence "The quick brown fox jumped over the lazy dog", the longest word is "jumped", which has a length of 6.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.
 */

// 1. You should create a function named findLongestWordLength that takes a string as an argument.

// 2 . The function should return the length of the longest word in the string.


function findLongestWordLength(string) {
    if (string.trim() === '') return null;
    let str = string.trim().split(/\s+/);
    let longest = 0;
    let word = null;

    for (let i = 0; i < str.length; i++) {
        if (str[i].length > longest) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return longest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
