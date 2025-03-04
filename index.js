// CREATE a new function named `getComputerChoice`.
const getComputerChoice = () => {
  // RETURN a random number between 0 and 2 using `Math.floor()` and `Math.random()`. Use this number to determine the computer's choice of rock, paper, or scissors.
  const randomNumber = Math.floor(Math.random() * 3);
  // console.log(randomNumber);

  // SWITCH the random number to return 'rock', 'paper', or 'scissors'.
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}


// CREATE a new function named `getHumanChoice` with a parameter of `userInput`.
const getHumanChoice = userInput => {
  // console.log(userInput);
  userInput = prompt('Enter your choice: rock, paper, or scissors.');
  // RETURN 'rock', 'paper', or 'scissors' based on the user's choice.
  return userInput;
}
// Create two new variables named humanScore and computerScore in the global scope.
// Initialize those variables with the value of 0.
let humanScore = 0;
let computerScore = 0;

// CREATE a new function named `playRound`.
// DEFINE two parameters named `userChoice` and `computerChoice`. Use these two parameters to take the human and computer choices as arguments.
const playRound = (userChoice, computerChoice) => {
  // Make the choice case-insensitive
  userChoice = userChoice.toLowerCase();

  console.log("User Choice:", userChoice, ", Computer Choice:", computerChoice);

  // Handle tie case
  if (userChoice === computerChoice) {
    console.log(`It is a tie! The current score stands at ${humanScore} to ${computerScore}.`);
    return
  }

  // Create a winning combinations object
  const winningCombos = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
  };

  // Determine winner using a single condition
  if (winningCombos[userChoice] === computerChoice) {
    humanScore++;
    console.log(`You win! The current score stands at ${humanScore} to ${computerScore}.`);
    return
  } else {
    computerScore++;
    console.log(`Computer wins! The current score stands at ${humanScore} to ${computerScore}.`);
    return
  }
}

for (let i = 0; i < 5; i++) {
  console.log(`Round ${i + 1}:`);
  const humanSelection = getHumanChoice();      // Get new input each round
  const computerSelection = getComputerChoice(); // Get new random choice each round
  playRound(humanSelection, computerSelection);
  console.log("------------------------");
}