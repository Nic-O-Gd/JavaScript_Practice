/*
Build a Lunch Picker Program

In this lab, you'll build a program that helps in managing lunch options. You'll work with an array of lunches, add and remove items from the array, and randomly select a lunch option.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

*/

// 1. You should declare a variable lunches and assign it an empty array to store the lunch items. 

let lunches = [];


// 2. Define function addLunchToEnd

const addLunchToEnd = (lunches, lunchItem) => {
  lunches.push(lunchItem);            // .push() add an item at the end of the array.
  console.log(`${lunchItem} added to the end of the lunch menu.`);
  return lunches;
}
lunches = ["Pizza", "Tacos"]; 
addLunchToEnd(lunches, 'Tacos');      // Output : 'Tacos added to the end of the lunch menu.'
addLunchToEnd(lunches, "Burger");     // Output : 'Burger added to the end of the lunch menu.'
console.log(lunches);                 // Output : [ 'Pizza', 'Tacos', 'Tacos', 'Burger' ]


// 3. Define function addLunchToStart

const addLunchToStart = (lunches, lunchItem) => {
  lunches.unshift(lunchItem);         // .unshift() add an item at the.
  console.log(`${lunchItem} added to the start of the lunch menu.`);
  return lunches; 
}
lunches = ["Burger", "Sushi"];
addLunchToStart(lunches, 'Pizza');    // Output : 'Pizza added to the start of the lunch menu.'
console.log(lunches);                 // Output : [ 'Pizza', 'Burger', 'Sushi' ]


// 4. Define function removeLastLunch

const removeLastLunch = (lunches) => {
  if (lunches.length === 0) {
    console.log("No lunches to remove.");
    return;
  }
  const removedItem = lunches.pop();  // .pop() remove the last item from an array.
  console.log(`${removedItem} removed from the end of the lunch menu.`);
  return lunches;
}
lunches = ["Stew", "Soup", "Toast"];
removeLastLunch(lunches);             // Output : 'Toast removed from the end of the lunch menu.'
console.log(lunches);                 // Output : [ 'Stew', 'Soup' ]
removeLastLunch(lunches);             // Output : 'Soup removed from the end of the lunch menu.'
console.log(lunches);                 // Output : [ 'Stew' ]
removeLastLunch(lunches);             // Output : 'Stew removed from the end of the lunch menu.'
removeLastLunch(lunches);             // Output : 'No lunches to remove.'

// 5. Define removeFirstLunch

const removeFirstLunch = (lunches) => {
  if (lunches.length === 0) {
    console.log("No lunches to remove.");
    return;
  }
  const removedItem = lunches.shift(); // .shift() remove the first item from an array.
  console.log(`${removedItem} removed from the start of the lunch menu.`);
    
  return lunches;
}
lunches = ["Salad", "Eggs", "Cheese"];
removeFirstLunch(lunches);            // Output : 'Salad removed from the start of the lunch menu.'
console.log(lunches);                 // Output : [ 'Eggs', 'Cheese' ]
removeFirstLunch(lunches);            // Output : 'Eggs removed from the start of the lunch menu.'
console.log(lunches);                 // Output : [ 'Cheese' ]
removeFirstLunch(lunches);            // Output : 'Cheese removed from the start of the lunch menu.'
removeFirstLunch(lunches);            // Output : 'No lunches to remove.'
console.log(lunches);                 // Output : [] empty array.


// 6. Define getRandomLunch 

const getRandomLunch = (lunches) => {
  if (lunches.length === 0) {
    console.log("No lunches available.");
    return;
  }
  const randomItem = Math.floor(Math.random() * lunches.length);
  const randomLunch = lunches[randomItem]
  console.log(`Randomly selected lunch: ${randomLunch}`);
}
lunches = ["Salad", "Eggs", "Cheese"];
getRandomLunch(lunches);                // Output : Randomly selected lunch: Salad



// 7. define showLunchMenu

const showLunchMenu = (lunches) => {
  if (lunches.length === 0) {
    console.log("The menu is empty.");
    return;
  }
  console.log(`Menu items: ${lunches.join(', ')}`);  /* .join(' ,') return a string of character of the array, with our without separator, here separator is space and comma. */
}
lunches = ["Greens", "Corns", "Beans"];
showLunchMenu(lunches);                 // Output : Menu items: Greens, Corns, Beans
