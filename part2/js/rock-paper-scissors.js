function getUserChoice() {
    "use strict";
    var userChoice = window.prompt("Choose: rock, paper, or scissors");
    userChoice = userChoice.toLowerCase(); 
  
    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
      return userChoice;
    } else {
      window.alert("Invalid input. Please choose rock, paper, or scissors.");
      return getUserChoice(); // Recursively prompt until a valid choice is made
    }
}

function selectComputerChoice() {
    "use strict";
    var computerChoice = Math.random();
    if (computerChoice < 0.33) {
        return "rock";
    } else if (computerChoice < 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

function findWinner(userChoice, computerChoice) {
    "use strict";
    if (userChoice === "rock") {
        if (computerChoice === "paper") {
            window.alert("You lost! You chose rock and the computer chose paper.");
        } else if (computerChoice === "scissors") {
            window.alert("You won!  You chose rock and the computer chose scissors.");
        }
    } else if (userChoice === "paper") {
        if (computerChoice === "rock") {
            window.alert("You won!  You chose paper and the computer chose rock.");
        } else if (computerChoice === "scissors") {
            window.alert("You lost!  You chose paper and the computer chose scissors.");
        }
    } else if (userChoice === "scissors") {
        if (computerChoice === "paper") {
            window.alert("You won!  You chose scissors and the computer chose paper.");
        } else if (computerChoice === "rock") {
            window.alert("You lost!  You chose scissors and the computer chose rock.");
        }
    }
}

function rockPaperScissors() {
    "use strict";
    var userChoice = getUserChoice();
    var computerChoice = selectComputerChoice();

    while( userChoice === computerChoice) {
        window.alert("That's a tie. Let's play again. Please choose rock, paper, or scissors."); 
        userChoice = getUserChoice();
        computerChoice = selectComputerChoice();
    }

    findWinner(userChoice, computerChoice);

    rockPaperScissors();
}
rockPaperScissors();