const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorButton = document.querySelector(".scissor");

const buttons = document.querySelectorAll("button");
function disableButtons (){
buttons.forEach((button) =>{
    button.disabled = true;
});
}


rockButton.addEventListener("click", () => {
    playRound("ROCK");
})

paperButton.addEventListener("click", () => {
    playRound("PAPER");
})

scissorButton.addEventListener("click", () => {
    playRound("SCISSOR");
})



let humanScore = 0;
let computerScore = 0;
playGame();
function getComputerChoice() {
    let choice = Math.floor(Math.random() * (4 - 1) + 1);
    switch(choice) {
        case 1:
            return "ROCK";
            
        case 2:
            return "PAPER";
            
        case 3:   
            return "SCISSOR";
               
    }

}




function playRound(humanSelection) {
    
    computerSelection = getComputerChoice();
    result = "";
    if ((humanSelection == "ROCK" && computerSelection == "SCISSOR") ||
        (humanSelection == "PAPER" && computerSelection == "ROCK") ||
        (humanSelection == "SCISSOR" && computerSelection == "PAPER")) {
            humanScore++;
            result = "You Win "+humanSelection+ " beats "+computerSelection+"\nplayer score = "+humanScore +" computer score = "+ computerScore;
            if (humanScore == 5) {
                result += '<br><br>You won the game!'
                disableButtons()
            }
        } else if(humanSelection == computerSelection) {
            result = "It's a tie both choose "+humanSelection+"\nplayer score = "+humanScore +" computernscore = "+ computerScore;

        } else {
            computerScore++;
            result = "You lose "+computerSelection+" beats "+humanSelection+"\nplayer score = "+humanScore +" computernscore = "+ computerScore;
            if (computerScore == 5) {
                result += '<br><br>Computer won the game!'
                disableButtons()
            }
        }  
        document.querySelector(".result").innerHTML = result;
        
               
        
}
