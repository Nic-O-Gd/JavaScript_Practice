/*
Build a Golf Score Translator

In the game of Golf, each hole has a par, meaning the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

In this lab, you will write a function that converts the par and strokes to their nickname.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

 */


const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

// 1. Define golfScore 

const golfScore = (par, totalStrokes) => {
  if (totalStrokes === 1) {
    return "Hole-in-one!";
  } else if (totalStrokes <= par - 2) {
    return "Eagle";
  } else if (totalStrokes === par - 1) {
    return "Birdie";
  } else if (totalStrokes === par) {
    return "Par";
  } else if (totalStrokes === par + 1) {
    return "Bogey";
  } else if (totalStrokes === par + 2) {
    return "Double Bogey";
  } else if (totalStrokes >= par + 3) {
    return "Go Home!";
  }
}
console.log(golfScore(3, 1)); // Output : 'Hole-in-one!'
console.log(golfScore(5, 2)); // Output : 'Eagle'
console.log(golfScore(3, 5)); // Output : 'Double Bogey'
console.log(golfScore(4, 8)); // Output : 'Go Home!'
console.log(golfScore(4, 4)); // Output : 'Par'
