// function getHumanChoice() {
//   let choice = prompt("Please enter rock, paper, or scissors:").toLowerCase();

//   while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
//     choice = prompt(
//       "Invalid choice. Please enter rock, paper, or scissors:"
//     ).toLowerCase();
//   }

//   return choice;
// }

// function getComputerChoice() {
//   const choices = ["rock", "paper", "scissors"];
//   const randomIndex = Math.floor(Math.random() * choices.length);
//   return choices[randomIndex];
// }

// function playRound(humanChoice, computerChoice) {
//   humanChoice = humanChoice.toLowerCase();
//   console.log(`Human choice: ${humanChoice}`);
//   console.log(`Computer choice: ${computerChoice}`);

//   if (humanChoice === computerChoice) {
//     console.log("It's a tie!");
//     return "tie";
//   } else if (
//     (humanChoice === "rock" && computerChoice === "scissors") ||
//     (humanChoice === "scissors" && computerChoice === "paper") ||
//     (humanChoice === "paper" && computerChoice === "rock")
//   ) {
//     console.log(
//       `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
//       } beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
//       }`
//     );
//     return "human";
//   } else {
//     console.log(
//       `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
//       } beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}`
//     );
//     return "computer";
//   }
// }

// function playGame() {
//   let humanScore = 0;
//   let computerScore = 0;

//   for (let i = 0; i < 5; i++) {
//     const humanChoice = getHumanChoice();
//     const computerChoice = getComputerChoice();
//     const result = playRound(humanChoice, computerChoice);

//     if (result === "human") {
//       humanScore++;
//     } else if (result === "computer") {
//       computerScore++;
//     }

//     console.log(
//       `Round ${i + 1
//       }: Human score = ${humanScore}, Computer score = ${computerScore}`
//     );
//   }

//   if (humanScore > computerScore) {
//     console.log("Congratulations! You won the game!");
//   } else if (humanScore < computerScore) {
//     console.log("Sorry, you lost the game. Better luck next time!");
//   } else {
//     console.log("It's a tie game!");
//   }
// }

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  const resultDiv = document.getElementById("result");
  const scoreDiv = document.getElementById("score");

  let resultMessage = `Human choice: ${humanChoice} | Computer Choice: ${computerChoice}<br>`;

  if (humanChoice === computerChoice) {
    resultMessage += "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    resultMessage += `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
    humanScore++;
  } else {
    resultMessage += `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}`;
    computerScore++;
  }

  resultDiv.innerHTML = resultMessage;
  scoreDiv.innerHTML = `Human: ${humanScore} | Computer: ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    declareWinner();
  }
}

function declareWinner() {
  const resultDiv = document.getElementById("result");
  if (humanScore === 5) {
    resultDiv.innerHTML += "<br><strong>Congratulations! You won the game!</strong>";
  } else if (computerScore === 5) {
    resultDiv.innerHTML += "<br><strong>Sorry, you lost the game. Better luck next time!</strong>";
  }

  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;

  // Show the replay button
  document.getElementById("replay").style.display = "block";

}

function resetGame() {
  humanScore = 0;
  computerScore = 0;

  document.getElementById("result").innerHTML = "";
  document.getElementById("score").innerHTML = `Human: 0 | Computer: 0`;

  // Re-enable the buttons
  document.getElementById("rock").disabled = false;
  document.getElementById("paper").disabled = false;
  document.getElementById("scissors").disabled = false;

  // Hide the replay button
  document.getElementById("replay").style.display = "none";
}


document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
document.getElementById("replay").addEventListener("click", resetGame);

// Start the game
// playGame();
