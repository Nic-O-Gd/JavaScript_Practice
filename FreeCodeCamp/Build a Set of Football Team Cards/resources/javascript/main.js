const footballTeam = {
  team: "Football Association of Ireland",
  year: 2022,
  headCoach: "Stephen Kenny",
  players: [
    {
      name: "Caoimhín Kelleher",
      position: "goalkeeper",
      isCaptain: false,
    },
    {
      name: "John Egan",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Nathan Collins",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Séamus Coleman",
      position: "defender",
      isCaptain: true,
    },
    {
      name: "James McClean",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Jamie McGrath",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Josh Cullen",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Alan Browne",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Matt Doherty",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Chiedozie Ogbene",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Callum Robinson",
      position: "forward",
      isCaptain: false,
    },
  ],
};

// Set the text content of the element with ID 'head-coach' to the head coach's name
document.getElementById("head-coach").textContent = footballTeam.headCoach;

// Set the text content of the element with ID 'team' to the team's name
document.getElementById("team").textContent = footballTeam.team;

// Set the text content of the element with ID 'year' to the year of the team data
document.getElementById("year").textContent = footballTeam.year;

// define createCards() that render the player and position
function createCards(player) {
  // Returns an HTML string representing the player's card
  return `<div class="player-card">
      <h2>${player.isCaptain ? "(Captain) " : ""}${player.name}</h2>
      <p>Position: ${player.position}</p>
    </div>`;
}

// Select the DOM element with ID 'player-cards' and store it in the variable 'container'
const container = document.getElementById("player-cards");

// Function to render players based on a selected filter
function renderPlayers(filter) {
  // Filter the players array based on the selected filter
  const filteredPlayers = footballTeam.players.filter((player) => {
    // If the filter is 'all', include all players
    if (filter === "all") {
      return true;
    } else {
      // Otherwise, include only players whose position matches the filter (case-insensitive)
      return player.position.toLowerCase() === filter;
    }
  });

  // Generate HTML for the filtered players and insert into the container
  container.innerHTML = filteredPlayers
    // Map each player to its HTML card using createCards()
    .map((player) => createCards(player))
    // Join all HTML strings into one string without commas
    .join("");
}

// Select the DOM element with ID 'players' and store it in the variable 'select'
const select = document.getElementById("players");

// Add an event listener to the 'select' element that triggers when the selection changes
select.addEventListener("change", (e) => {
  // Call 'renderPlayers' with the selected value whenever the selection changes
  renderPlayers(e.target.value);
});

// Initially call 'renderPlayers' with 'all' to display all players on page load
renderPlayers("all");
