let count = 0;
const cardCounter = (card) => {
  if(card >= 2 && card <= 6) {
    ++count;
  } else if(card >= 7 && card <= 9) {
    count;
  } else if(card === 10, "J", "Q", "K", "A") {
    --count;
  } else if(count > 0) {
  } const decision = count > 0 ? 'Bet' : 'Hold';
  return `${count} ${decision}`;
} 
