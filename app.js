function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];

  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

function playGame(playerSelection, computerSelection) {
  let result = "";
  if (playerSelection == computerSelection) {
    result = "Draw!";
  }

  if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      result = "Computer Wins! Paper beats Rock!";
    } else if (computerSelection == "scissors") {
      result = "You win! Rock beats Scissors!";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      result = "You win! Paper beats rock";
    } else if (computerSelection == "scissors") {
      result = "Computer wins! Scissors beats Paper!";
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      result = "Computer wins! Rock beats Scissors";
    } else if (computerSelection == "paper") {
      result = "You win! Paper beats Scissors";
    }
  }
  return result;
}

while (true) {
  const computerChoice = getComputerChoice();

  let playerChoice = prompt("Please choose rock, paper, or scissors: ");
  playerChoice = playerChoice.toLocaleLowerCase().trim();
  if (
    playerChoice == "rock" ||
    playerChoice == "paper" ||
    playerChoice == "scissors"
  ) {
    console.log(`You chose ${playerChoice}`);
    console.log(`Computer chose ${computerChoice}`);
    let result = playGame(playerChoice, computerChoice);

    console.log(result);

    if (result != "Draw!") {
      break;
    }
  } else {
    console.log("Invalid input");
    break;
  }
}
