// Define array questions
const questions = [
  {
    category: "Souls Games",
    question: "In Dark Souls, what is the name of the giant serpent who talks about the Lordvessel?",
    choices: ["Seath the Scaleless", "King Seeker Frampt", "Giant Dragon"],
    answer: "King Seeker Frampt"
  },
  {
    category: "Souls Games",
    question: "Which weapon is known for its ability to transform in Bloodborne?",
    choices: ["Saw Cleaver", "Hunter Pistol", "Chikage"],
    answer: "Saw Cleaver"
  },
  {
    category: "Souls Games",
    question: "What is the main currency used to level up in Dark Souls?",
    choices: ["Souls", "Blood Echoes", "Runes"],
    answer: "Souls"
  },
  {
    category: "Souls Games",
    question: "In Demon's Souls, what is the name of the boss that is a giant armored knight in 1-1?",
    choices: ["Dragon God", "Phalanx", "Vanguard"],
    answer: "Vanguard"
  },
  {
    category: "Souls Games",
    question: "Which game introduced the 'Ludwig's Holy Blade' weapon?",
    choices: ["Bloodborne", "Dark Souls III", "Demon's Souls"],
    answer: "Bloodborne"
  }
];

// Define function getRandomQuestion
const getRandomQuestion = (questions) => {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

// Define function getRandomComputerChoice
const getRandomComputerChoice = (choices) => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Define function getResults
const getResults = (questions, computerChoice) => {
  if (computerChoice === questions.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questions.answer}`;
  }
}
