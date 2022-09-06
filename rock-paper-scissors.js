function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let randomArrayIndex = Math.floor(Math.random() * choices.length);
  let choice = choices[randomArrayIndex];
  return choice;
}

function playRound(playerSelection, computerSelection) {
  let gameMessage = "";
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === "rock" && computerSelection === "rock") {
    gameMessage = "It's a Tie! Both players chose Rock";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    gameMessage = "You Lose! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    gameMessage = "You Win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    gameMessage = "You Win! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    gameMessage = "It's a Tie! Both players chose Paper";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    gameMessage = "You Lose! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    gameMessage = "You Lose! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    gameMessage = "You Win! Scissors beats Paper";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    gameMessage = "It's a Tie! Both players chose Scissors";
  }

  return gameMessage;
}
