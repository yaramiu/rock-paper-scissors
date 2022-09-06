function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let randomArrayIndex = Math.floor(Math.random() * choices.length);
  let choice = choices[randomArrayIndex];
  return choice;
}
