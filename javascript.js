//test to make sureJS is working in console
console.log("Hello World! Welcome to my Rock Paper Scissors game!");

//function to play 5 rounds of RPS
function playGame() {
    
    //round counter
    let round = 0;
    
    //scoring variables
    let humanScore = 0;
    let computerScore = 0;

    // Randomly return one of "rock", "paper", or "scissors" for the computer.
    function getComputerChoice() {
        // Use Math.random to generate a decimal number
        let computerChoice = Math.random();
        // Use it to select the outcome based on value range between 0-1
        //1/3 are rock
        if (computerChoice < 0.33) {
            return "rock";
        } 
        //1/3 are paper
        else if (computerChoice < 0.66) {
            return "paper";
        } 
        //the remaining 1/3 are scissors
        else {
            return "scissors";
        }
    }

    //Get the player's selection using the Prompt method
    function getHumanChoice() {
        let humanChoice = prompt("Please enter your Rock Paper Scissors choice: ");
        return humanChoice;
    }   

    //Play a round of rock paper scissors
    function playRound(humanChoice, computerChoice) {
               
        //determine if a round was a tie
        if (humanChoice.toLowerCase() === computerChoice) {
            console.log("Tie, close one!");
        
        // determine if the human player won
        } else if ((humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") ||
        (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") ||
        (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper")) {
            humanScore++;
            console.log("You win, keep it up!");
            return computerScore;

        // determine if the computer won
        } else {
            computerScore++ ;
            console.log( "You lose, try again!");
            return computerScore;
        }
    }
    
    while (round < 5) {
        //assign choice variables
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        //declare the round
        console.log("Round: ", round+1);

        //play one round
        playRound(humanSelection, computerSelection);
        
        //increment the round counter
        round++;
        
    }

    //score check
    console.log("The score is Computer: " + computerScore +", Player: " + humanScore)

    //Declare the winner
    if (humanScore > computerScore) {
        console.log("Congratulations, you win!")
    } else {
        console.log("Better luck next time...")
    }
}

//play a full, 5 round game of rock paper scissors
playGame();

