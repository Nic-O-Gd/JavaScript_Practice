const quotes = [
  {
    character: "Solaire of Astora",
    message:
      "You really are fond of chatting with me, aren't you? If I didn't know better, I'd think you had feelings for me! Oh, no, dear me. Pretend you didn't hear that! Hah hah hah!",
    game: "Dark Souls",
  },
  {
    character: "Petrus of Thorolund",
    message:
      "Oh, I'm sorry. Miracles, was it? …Sometimes I lose myself; pay me no mind!",
    game: "Dark Souls",
  },
  {
    character: "Lord's Blade Ciaran",
    message: "But, how… You humans… My dear Ar…tor…",
    game: "Dark Souls",
  },
  {
    character: "Trusty Patches",
    message: "There, that hole. Take a closer look.",
    game: "Dark Souls",
  },
  {
    character: "Dark Sun Gwyndolin",
    message:
      "What foolishness… Why trespasseth upon the Great Lord's tomb, whilst thou art a disciple of the Dark Sun? Mark the words of mineself, Gwyndolin! Thou shalt not go unpunished!",
    game: "Dark Souls",
  },
  {
    character: "Oswald of Carim",
    message:
      "Thou art welcome anytime. It is only human to commit a sin… Heh heh heh heh…",
    game: "Dark Souls",
  },
  {
    character: "Gehrman, the First Hunter",
    message: "You must accept your death, be freed from the night.",
    game: "Bloodborne",
  },
  {
    character: "The Doll",
    message: "Welcome home, good hunter. What is it you desire?",
    game: "Bloodborne",
  },
  {
    character: "Micolash, Host of the Nightmare",
    message: "Now I'm waking up, I'll forget everything…",
    game: "Bloodborne",
  },
  {
    character: "Alfred, Hunter of the Vilebloods",
    message:
      "Byrgenwerth is an old place of learning. And the tomb of the gods, carved out below Yharnam, should be familiar to every hunter.",
    game: "Bloodborne",
  },
  {
    character: "Annalise, Queen of the Vilebloods",
    message:
      "Well, well… An odd hunter thou art indeed… We’ve tired of these piteous nights… Share in Our plight, and take oath against the church. If thou wouldst this path walk… …I prithee partake of my rotted blood.",
    game: "Bloodborne",
  },
  {
    character: "Blood Minister",
    message:
      "Oh, yes... Paleblood... Well, you've come to the right place. Yharnam is the home of blood ministration. You need only unravel its mystery. But, where's an outsider like yourself to begin? Easy, with a bit of Yharnam blood of your own... But first, you'll need a contract...",
    game: "Bloodborne",
  },
];

function getRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  const entry = quotes[index];
  console.log(`"${entry.message}"\n — ${entry.character} (${entry.game})`);
}

getRandomQuote();
