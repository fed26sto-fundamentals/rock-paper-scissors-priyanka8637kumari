// code to get choice from computer

function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * choice.length);
    return choice[randomNumber];
}
//code to get choice from human
function getHumanchoice() {
    let user_answer = "";
    user_answer = prompt("Enter user's choice:");
    if (user_answer != null)
        user_answer = user_answer.toLowerCase();
    if (user_answer === "rock" || user_answer === "paper" || user_answer === "scissors") {
        return user_answer;
    }
    else {
        console.log("Enter a valid choice.");
        return getHumanchoice();
    }
    //return user_answer;
}
// code for the logic of Game

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("Its a tie, Both have choosen " +humanChoice);
    }
    else if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
            humanScore++,
        console.log("Human beats Computer, Human have choosen " +humanChoice + " Compter have choosen " + computerChoice);
    }
    else {
        computerScore++;
        console.log("Computer beats human Human have choosen " +humanChoice + " Compter have choosen " + computerChoice );
    }
}
// Function to play the game for 5 rounds

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanchoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if(humanScore > computerScore ){
        console.log("Human won the game, Score is- Human: "+humanScore+" and Computer: "+computerScore);
    }
    else if(computerScore > humanScore){
        console.log("Computer won the game, Score is- Human: "+humanScore+" and Computer: "+computerScore);
    }
    else{
        console.log("Its a tie, Score is- Human: "+humanScore+" and Computer: "+computerScore);
    }
}

//Start the Game

playGame();




