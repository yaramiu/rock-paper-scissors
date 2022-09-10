function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let randomArrayIndex = Math.floor(Math.random() * choices.length);
  let choice = choices[randomArrayIndex];
  return choice;
}

function playRound(playerSelection, computerSelection, scoreboard) {
  const scores = document.querySelector(".scores");
  const roundResults = document.querySelector(".round-results");
  const roundResult = document.createElement("p");
  roundResults.appendChild(roundResult);

  if (playerSelection === "rock" && computerSelection === "rock") {
    roundResult.textContent = "It's a Tie! Both players chose Rock";
    scores.textContent = `Player: ${(scoreboard.playerScore += 0.5)} Computer: ${(scoreboard.computerScore += 0.5)}`;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    roundResult.textContent = "You Lose! Paper beats Rock";
    scores.textContent = `Player: ${
      scoreboard.playerScore
    } Computer: ${(scoreboard.computerScore += 1)}`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    roundResult.textContent = "You Win! Rock beats Scissors";
    scores.textContent = `Player: ${(scoreboard.playerScore += 1)} Computer: ${
      scoreboard.computerScore
    }`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    roundResult.textContent = "You Win! Paper beats Rock";
    scores.textContent = `Player: ${(scoreboard.playerScore += 1)} Computer: ${
      scoreboard.computerScore
    }`;
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    roundResult.textContent = "It's a Tie! Both players chose Paper";
    scores.textContent = `Player: ${(scoreboard.playerScore += 0.5)} Computer: ${(scoreboard.computerScore += 0.5)}`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    roundResult.textContent = "You Lose! Scissors beats Paper";
    scores.textContent = `Player: ${
      scoreboard.playerScore
    } Computer: ${(scoreboard.computerScore += 1)}`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    roundResult.textContent = "You Lose! Rock beats Scissors";
    scores.textContent = `Player: ${
      scoreboard.playerScore
    } Computer: ${(scoreboard.computerScore += 1)}`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    roundResult.textContent = "You Win! Scissors beats Paper";
    scores.textContent = `Player: ${(scoreboard.playerScore += 1)} Computer: ${
      scoreboard.computerScore
    }`;
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    roundResult.textContent = "It's a Tie! Both players chose Scissors";
    scores.textContent = `Player: ${(scoreboard.playerScore += 0.5)} Computer: ${(scoreboard.computerScore += 0.5)}`;
  }

  const isWinner = scoreboard.playerScore >= 5 || scoreboard.computerScore >= 5;
  if (isWinner) {
    displayWinner(scoreboard);
    endGame();
  }
}

function game() {
  const scoreboard = { playerScore: 0, computerScore: 0 };

  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    let playerSelection = button.textContent;
    playerSelection = playerSelection.toLowerCase();
    button.onclick = () =>
      playRound(playerSelection, getComputerChoice(), scoreboard);
  });
}

function displayWinner(scoreboard) {
  const winner = document.querySelector(".winner");
  winner.style.backgroundColor = "yellow";

  if (scoreboard.playerScore > scoreboard.computerScore) {
    winner.textContent = "Player is the winner";
  } else if (scoreboard.playerScore < scoreboard.computerScore) {
    winner.textContent = "Computer is the winner";
  } else {
    winner.textContent = "It is a draw";
  }
}

function endGame() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.onclick = null;
  });
}

game();
