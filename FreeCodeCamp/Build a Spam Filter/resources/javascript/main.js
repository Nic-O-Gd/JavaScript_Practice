// Get the input element where the user types the message
const messageInput = document.getElementById("message-input");

// Get the element where the result message will be displayed
const result = document.getElementById("result-message");

// Get the button element that triggers the spam check
const checkMessageButton = document.getElementById("check-message-btn");

// Define regex pattern to detect common spam phrases like "please help" or "assist me" (case-insensitive)
const helpRegex = /please help|assist me/i;

// Define regex pattern to detect mentions of dollar amounts, e.g., "100 dollars" or "five hundred dollars"
const dollarRegex = /[0-9]+\s*(?:hundred|thousand|million|billion)?\s+dollars/i;

// Define regex pattern to detect fake "free money" messages with obfuscated characters
const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i;

// Define regex pattern to detect spam related to stocks, with obfuscated characters
const stockRegex = /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i;

// Define regex pattern to detect spam greeting "dear friend" with obfuscation
const dearRegex = /(?:^|\s)d[e3][a@4]r fr[i1|][e3]nd(?:$|\s)/i;

// Combine all regex patterns into a deny list array
const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearRegex];

// Function to check if a message matches any of the spam patterns
const isSpam = (msg) => denyList.some((regex) => regex.test(msg));

// Add event listener to the button to handle click events
checkMessageButton.addEventListener("click", () => {
  // Check if the input message is empty
  if (messageInput.value === "") {
    alert("Please enter a message."); // Alert user to enter a message
    return; // Exit the function early
  }

  // Check if the message is spam and display the appropriate message
  result.textContent = isSpam(messageInput.value)
    ? "Oh no! This looks like a spam message."
    : "This message does not seem to contain any spam.";
  
  // Clear the input field after checking
  messageInput.value = "";
});