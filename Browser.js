const answer = Math.floor(Math.random() * 101);
let counter = 1;

while (true) {
  let guess = window.prompt("Guess the number between 0 and 100: ");
  guess = Number.parseInt(guess);
  if (Number.isNaN(guess)) {
    window.alert("Invalid input, try again!");
    continue;
  }

  if (guess < answer) {
    window.alert("Too low");
  } else if (guess > answer) {
    window.alert("Too high");
  } else {
    window.alert("Correct!");
    window.alert("Guesses taken: " + counter);
    break;
  }

  counter++;
}
