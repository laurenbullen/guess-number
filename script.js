"use strict";

// this makes the random number 1-20 appear in header
const secretNumber = Math.floor(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;

let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No number added!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent =
      "You guessed the correct number!";
    score++;
    document.querySelector(".score").textContent = score;
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "Your guess was too high";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "Your guess was too low";
    score--;
    document.querySelector(".score").textContent = score;
  }
});
