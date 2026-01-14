//test to make sureJS is working in console
console.log("Hello World! Welcome to my Rock Paper Scissors game!");

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