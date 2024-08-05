
let humanScore = 0;
let computerScore = 0;
playGame();
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return choice;
}

function getHumanChoice() {
    let choice = prompt("Please type Rock or Paper or Scissor!")
    let text = choice.toUpperCase();
    return text;
}   
/*
computerSelection : 
0 -> Rock
1 -> Paper
2 -> Scissor
*/

function playRound(humanSelection, computerSelection) {
    if (humanSelection === "ROCK") {

        if (computerSelection === 1) {
            computerScore++;
            console.log("You lose! Paper beats Rock");
        } else if (computerSelection === 2) {
            humanScore++;
            console.log("You Won! Rock beats Scissor");
        } else {
            console.log("It's a tie");
        }
            
    } else if (humanSelection === "PAPER"){
        if (computerSelection === 0) {
            humanScore++;
            console.log("You Won! Paper beats Rock");
        } else if (computerScore === 2) {
            computerSelection++;
            console.log("You lose! Scissor beats Paper");
        } else {
            console.log("It's a tie");
        }
    } else if (humanSelection === "SCISSOR") {
        if (computerSelection === 0) {
            computerScore++;
            console.log("You lose! Rock beats Scissor");
        } else if (computerSelection === 1) {
            humanScore++;
            console.log("You Won! Scissor beats Paper");
        } else {
            console.log("It's a tie");
        }
    } else {
        console.log("Invalid Choice");
    }

}
function playGame() {
    
    for(i = 0; i < 5; i++) {
        console.log("Round-"+(i+1));
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
    }


    console.log("Final Score : You:"+humanScore+", Computer:"+computerScore);
    if (humanScore > computerScore) {
        console.log("You Won");
    } else if (computerScore > humanScore){
        console.log("Computer won");
    } else {
        console.log("It's a tie");
    }  
}
