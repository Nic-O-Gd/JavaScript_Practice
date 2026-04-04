/*
You have been provided with a page containing several instrument cards. You are going to add functionality to this static page so you'll be able to filter the instruments depending on their family.
Step1
Start by creating a dropdown menu with the class of select-container.

Step 2
Now add four options to your dropdown, All, Woodwinds, Brass, and Percussion, in this order. For each option, use the lowercase option to specify the id attribute and the value attribute.

Step 3
Before starting to add the filter functionality to your page, link your script.js file to the HTML.
*/

// Step 4 - Declare an empty array named instrumentsArr
const instrumentsArr = [
  // Step 5 - Add first object representing the flute (category, instrument, price)
  { category: "woodwinds", instrument: "Flute", price: 500 },
  // Step 6 - Add two more objects for the remaining woodwinds
  { category: "woodwinds", instrument: "Clarinet", price: 200 },
  { category: "woodwinds", instrument: "Oboe", price: 4000 },
  // Step 7 - The remaining instruments have been added
  { category: "brass", instrument: "Trumpet", price: 200 },
  { category: "brass", instrument: "Trombone", price: 300 },
  { category: "brass", instrument: "French Horn", price: 4300 },
  { category: "percussion", instrument: "Drum Set", price: 500 },
  { category: "percussion", instrument: "Xylophone", price: 3000 },
  { category: "percussion", instrument: "Cymbals", price: 200 },
  { category: "percussion", instrument: "Marimba", price: 3000 },
];

// Step 7 - Declare selectContainer and productsContainer and assign them the HTML elements
const selectContainer = document.querySelector("select");
const productsContainer = document.querySelector(".products-container");

// Step 10 - Declare a function named instrumentCards that takes a single parameter
function instrumentCards(instrumentCategory) {
  // Step 11 - Filter instruments by category; return all if "all" is selected
  const instruments =
    instrumentCategory === "all"
      ? instrumentsArr
      : instrumentsArr.filter(
          ({ category }) => category === instrumentCategory
        );

  // Step 12 - Return an array of HTML strings for each instrument card
  return instruments
    .map(
      ({ instrument, price }) =>
        `<div class="card"><h2>${instrument}</h2><p>$${price}</p></div>`
    )
    // Step 14 - Join the array to remove commas between cards
    .join("");
}

// Step 8 - Add a change event listener to selectContainer
// Step 13 - Set the innerHTML of productsContainer to the result of instrumentCards
selectContainer.addEventListener("change", () => {
  // Step 9 - Access the selected value with .value
  productsContainer.innerHTML = instrumentCards(selectContainer.value);
});

