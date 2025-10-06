import readline from "node:readline/promises";
import process from "node:process";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answer = Math.floor(Math.random() * 101);
let counter = 1;

while (true) {
  let guess = await rl.question("Guess the number between 0 and 100: ");
  guess = Number.parseInt(guess);
  if (Number.isNaN(guess)) {
    console.log("Invalid input, try again!");
    continue;
  }

  if (guess < answer) {
    console.log("Too low");
  } else if (guess > answer) {
    console.log("Too high");
  } else {
    console.log("Correct!");
    console.log("Guesses taken: " + counter);
    break;
  }

  counter++;
}

rl.close();
