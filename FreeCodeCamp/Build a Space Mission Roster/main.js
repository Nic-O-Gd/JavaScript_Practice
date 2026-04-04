// Initialize an empty array to hold the crew members
const squad = [];

// Define the first astronaut with specific attributes
const firstAstronaut = {
  id: 1,
  name: "Andy",
  role: "Commander",
  isEVAEligible: true,
  priority: 3
};

// Function to add a crew member to the crew array
function addCrewMember(crew, astronaut) {
  // Loop through existing crew to check for duplicate IDs
  for (let i = 0; i < crew.length; i++) {
    if (crew[i].id === astronaut.id) {
      console.log("Duplicate ID: " + astronaut.id); // Log if duplicate found
      return; // Exit if duplicate ID is detected
    }
  }
  // Add the astronaut to the crew if no duplicate ID exists
  crew.push(astronaut);
}

// Add the first astronaut to the squad
addCrewMember(squad, firstAstronaut);

// Define an array of remaining crew members with their attributes
const remainingCrew = [
  { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
  { id: 3, name: "Caroline", role: "Engineer", isEVAEligible: true, priority: 4 },
  { id: 4, name: "Diego", role: "Scientist", isEVAEligible: false, priority: 1 },
  { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
  { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
  { id: 7, name: "Gertrude", role: "Communications", isEVAEligible: false, priority: 4 },
  { id: 8, name: "Hank", role: "Mechanic", isEVAEligible: true, priority: 2 },
  { id: 9, name: "Irene", role: "Specialist", isEVAEligible: true, priority: 5 },
  { id: 10, name: "Joan", role: "Technician", isEVAEligible: false, priority: 1 },
];

// Loop through remaining crew and add each to the squad using addCrewMember
for (let i = 0; i < remainingCrew.length; i++) {
  addCrewMember(squad, remainingCrew[i]);
}

// Function to swap two crew members within the crew array based on their indices
function swapCrewMembers(crew, fromIndex, toIndex) {
  // Check for valid indices
  if (
    fromIndex < 0 || 
    toIndex < 0 ||
    fromIndex >= crew.length ||
    toIndex >= crew.length
  ) {
    console.log("Invalid crew indices"); // Log if indices are invalid
    return;
  }

  // Create a shallow copy of the crew array
  const updatedCrew = crew.slice();

  // Swap the crew members at the specified indices
  updatedCrew[fromIndex] = updatedCrew.splice(toIndex, 1, updatedCrew[fromIndex])[0];

  // Return the updated crew array with swapped members
  return updatedCrew; 
}

// Swap crew members at index 2 and 5, and store the result in updatedSquad
const updatedSquad = swapCrewMembers(squad, 2, 5);

// Function to sort crew members by priority in descending order (highest first)
function sortByPriorityDescending(crew) {
  // Bubble sort implementation
  for (let i = 0; i < crew.length - 1; i++) {
    for (let j = 0; j < crew.length - 1 - i; j++) {
      // Swap if the current crew member has lower priority than the next
      if (crew[j].priority < crew[j + 1].priority) {
        const temp = crew[j];
        crew[j] = crew[j + 1];
        crew[j + 1] = temp;
      }
    }
  }
}

// Function to filter crew members eligible for EVA and sort them by priority
function getEVAReadyCrew(crew) {
  const eligible = [];
  // Loop through each crew member
  for (const astronaut of crew) {
    // Check if the astronaut is EVA eligible
    if (astronaut.isEVAEligible) eligible.push(astronaut);
  }
  // Sort the eligible crew in descending order of priority
  sortByPriorityDescending(eligible); 

  // Return the sorted list of EVA-eligible crew
  return eligible;
}

// Get the EVA-ready crew from the updated squad
const EVAReadySquad = getEVAReadyCrew(updatedSquad);

// Function to divide crew into chunks of specified size
function chunkCrew(crew, size) {
  // Validate chunk size
  if (size < 1) {
    console.log("Chunk size must be >= 1");
    return;
  }

  const chunks = [];
  // Loop through crew to create chunks
  for (let i = 0; i < crew.length; i += size) {
    // Slice crew array into chunks of the specified size and add to chunks array
    chunks.push(crew.slice(i, i + size));
  }

  // Return array of crew chunks
  return chunks;
}

// Divide the EVA-ready squad into chunks of 3 members each
const EVAChunks = chunkCrew(EVAReadySquad, 3);

// Function to print crew members' names sorted by priority
function printCrewSummary(crew) {
  // Create a shallow copy to avoid mutating original array
  const sorted = crew.slice();
  // Sort the copy by priority in descending order
  sortByPriorityDescending(sorted); 
  // Loop through sorted crew and print each member's name
  for (const astronaut of sorted) {
    console.log(astronaut.name);
  }
}

// Call the function to print the updated squad's crew members
printCrewSummary(updatedSquad);