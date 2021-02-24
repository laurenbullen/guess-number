"use strict";

// this makes the random number 1-20 appear in header
const secretNumber = Math.floor(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;

let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;
  console.log(guess, typeof guess);

  //this happens if no number is entered
  if (!guess) {
    document.querySelector(".message").textContent = "No number added!";

    //happens if number is correct
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number!";
    score++;
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#rgb";

    //happens if guess is too high
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "Your guess was too high";
    score--;
    document.querySelector(".score").textContent = score;

    //happens if guess is too low
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "Your guess was too low";
    score--;
    document.querySelector(".score").textContent = score;
  }
});
