function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let randomArrayIndex = Math.floor(Math.random() * choices.length);
  let choice = choices[randomArrayIndex];
  return choice;
}

function playRound(playerSelection, computerSelection) {
  let winner = "";
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === "rock" && computerSelection === "rock") {
    console.log("It's a Tie! Both players chose Rock");
    winner = "both";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("You Lose! Paper beats Rock");
    winner = "computer";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You Win! Rock beats Scissors");
    winner = "player";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You Win! Paper beats Rock");
    winner = "player";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    console.log("It's a Tie! Both players chose Paper");
    winner = "both";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("You Lose! Scissors beats Paper");
    winner = "computer";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("You Lose! Rock beats Scissors");
    winner = "computer";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You Win! Scissors beats Paper");
    winner = "player";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    console.log("It's a Tie! Both players chose Scissors");
    winner = "both";
  }

  return winner;
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  const ROUNDS_TO_PLAY = 5;

  for (round = 1; round <= ROUNDS_TO_PLAY; round++) {
    let playerSelection = prompt("Choose rock, paper, or scissors: ");

    if (playerSelection === null) {
      return;
    }

    let isValidSelection = checkValidSelection(playerSelection);
    while (!isValidSelection) {
      playerSelection = prompt(
        "Invalid selection. Please choose only rock, paper, or scissors: "
      );
      isValidSelection = checkValidSelection(playerSelection);
    }

    let computerSelection = getComputerChoice();

    let roundWinner = playRound(playerSelection, computerSelection);
    if (roundWinner === "player") {
      playerScore += 1;
    } else if (roundWinner === "computer") {
      computerScore += 1;
    } else {
      playerScore += 0.5;
      computerScore += 0.5;
    }

    console.log(
      `Results after round ${round}: player: ${playerScore} - computer: ${computerScore}`
    );
  }

  if (playerScore > computerScore) {
    console.log("Player is the winner");
  } else if (playerScore < computerScore) {
    console.log("Computer is the winner");
  } else {
    console.log("It is a draw");
  }
}

function checkValidSelection(playerSelection) {
  if (playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let isValidSelection =
      playerSelection === "rock" ||
      playerSelection === "paper" ||
      playerSelection === "scissors";
    return isValidSelection;
  } else {
    return false;
  }
}

game();
