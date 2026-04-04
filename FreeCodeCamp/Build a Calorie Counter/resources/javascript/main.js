// Get references to DOM elements by their IDs
const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');

// Flag to indicate if there is an input error
let isError = false;

/**
 * Function to remove spaces, plus, and minus signs from input string
 * @param {string} str - The input string to clean
 * @returns {string} - The cleaned string
 */
function cleanInputString(str) {
  const regex = /[+\-\s]/g; // Regex to match +, -, and whitespace characters
  return str.replace(regex, '');
}

/**
 * Function to check if the input contains invalid scientific notation (e.g., 1e10)
 * @param {string} str - The input string to check
 * @returns {boolean} - True if invalid input, false otherwise
 */
function isInvalidInput(str) {
  const regex = /\d+e\d+/i; // Regex to match scientific notation pattern
  return str.match(regex);
}

/**
 * Function to dynamically add new entry inputs based on user selection
 */
function addEntry() {
  // Find the container for inputs based on the selected dropdown value (e.g., breakfast, lunch)
  const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
  // Count current number of input fields to assign a new entry number
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;

  // Create HTML string for new input fields: Name and Calories
  const HTMLString = `
  <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
  <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
  <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
  <input
    type="number"
    min="0"
    id="${entryDropdown.value}-${entryNumber}-calories"
    placeholder="Calories"
  />`;

  // Insert the new input fields at the end of the container
  targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);
}

/**
 * Function to calculate total calories and update the output based on user inputs
 * @param {Event} e - The event object
 */
function calculateCalories(e) {
  e.preventDefault(); // Prevent form submission from reloading the page
  isError = false; // Reset error flag

  // Select all number inputs for each meal category
  const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
  const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
  const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
  const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
  const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");

  // Calculate total calories for each category
  const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
  const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
  const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
  const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
  const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
  // Calculate total budget calories
  const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);

  // If there was an input error, stop further calculation
  if (isError) {
    return;
  }

  // Calculate total calories consumed
  const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
  // Calculate remaining calories considering exercise and budget
  const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
  // Determine if there is a surplus or deficit
  const surplusOrDeficit = remainingCalories < 0 ? 'Surplus' : 'Deficit';

  // Update the output section with the results
  output.innerHTML = `
  <span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
  <hr>
  <p>${budgetCalories} Calories Budgeted</p>
  <p>${consumedCalories} Calories Consumed</p>
  <p>${exerciseCalories} Calories Burned</p>
  `;

  // Make the output visible
  output.classList.remove('hide');
}

/**
 * Helper function to sum calories from a list of input elements
 * @param {NodeList} list - List of input elements
 * @returns {number|null} - Sum of calories, or null if invalid input
 */
function getCaloriesFromInputs(list) {
  let calories = 0;

  for (const item of list) {
    const currVal = cleanInputString(item.value); // Clean the input string
    const invalidInputMatch = isInvalidInput(currVal); // Check for scientific notation

    if (invalidInputMatch) {
      alert(`Invalid Input: ${invalidInputMatch[0]}`); // Alert user for invalid input
      isError = true; // Set error flag
      return null; // Exit function early
    }
    calories += Number(currVal); // Add valid number to total
  }
  return calories;
}

/**
 * Function to clear all input fields and reset the output
 */
function clearForm() {
  // Select all containers holding input fields
  const inputContainers = Array.from(document.querySelectorAll('.input-container'));

  // Clear each container's inner HTML
  for (const container of inputContainers) {
    container.innerHTML = '';
  }

  // Reset the budget input
  budgetNumberInput.value = '';
  // Clear the output display
  output.innerText = '';
  // Hide the output section
  output.classList.add('hide');
}

// Attach event listener to the "Add Entry" button
addEntryButton.addEventListener("click", addEntry);
// Attach event listener to the form for calculating calories
calorieCounter.addEventListener("submit", calculateCalories);
// Attach event listener to the "Clear" button
clearButton.addEventListener("click", clearForm);