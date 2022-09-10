function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  let randomArrayIndex = Math.floor(Math.random() * choices.length);
  let choice = choices[randomArrayIndex];
  return choice;
}

function playRound(playerSelection, computerSelection, scoreboard) {
  const scores = document.querySelector(".scores");
  const roundResult = document.querySelector(".round-result");
  let resultStr = "";

  if (playerSelection === "rock" && computerSelection === "rock") {
    resultStr += "It's a Tie! Both players chose Rock";
    scores.textContent = `Player: ${(scoreboard.playerScore += 0.5)} Computer: ${(scoreboard.computerScore += 0.5)}`;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    resultStr += "You Lose! Paper beats Rock";
    scores.textContent = `Player: ${
      scoreboard.playerScore
    } Computer: ${(scoreboard.computerScore += 1)}`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    resultStr += "You Win! Rock beats Scissors";
    scores.textContent = `Player: ${(scoreboard.playerScore += 1)} Computer: ${
      scoreboard.computerScore
    }`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    resultStr += "You Win! Paper beats Rock";
    scores.textContent = `Player: ${(scoreboard.playerScore += 1)} Computer: ${
      scoreboard.computerScore
    }`;
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    resultStr += "It's a Tie! Both players chose Paper";
    scores.textContent = `Player: ${(scoreboard.playerScore += 0.5)} Computer: ${(scoreboard.computerScore += 0.5)}`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    resultStr += "You Lose! Scissors beats Paper";
    scores.textContent = `Player: ${
      scoreboard.playerScore
    } Computer: ${(scoreboard.computerScore += 1)}`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    resultStr += "You Lose! Rock beats Scissors";
    scores.textContent = `Player: ${
      scoreboard.playerScore
    } Computer: ${(scoreboard.computerScore += 1)}`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    resultStr += "You Win! Scissors beats Paper";
    scores.textContent = `Player: ${(scoreboard.playerScore += 1)} Computer: ${
      scoreboard.computerScore
    }`;
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    resultStr += "It's a Tie! Both players chose Scissors";
    scores.textContent = `Player: ${(scoreboard.playerScore += 0.5)} Computer: ${(scoreboard.computerScore += 0.5)}`;
  }

  roundResult.textContent = "Round Result: " + resultStr;

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
    button.onclick = () => {
      let playerSelection = button.textContent;
      let computerSelection = getComputerChoice();

      const playerChoice = document.querySelector(".player-choice");
      const computerChoice = document.querySelector(".computer-choice");
      playerChoice.textContent = `Player Choice: ${playerSelection}`;
      computerChoice.textContent = `Computer Choice: ${computerSelection}`;

      playerSelection = playerSelection.toLowerCase();
      computerSelection = computerSelection.toLowerCase();
      playRound(playerSelection, computerSelection, scoreboard);
    };
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
