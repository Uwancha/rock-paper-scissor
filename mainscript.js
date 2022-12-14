//Add a function to get a computer's selection
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    switch(randomNumber) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
} 

//Declare variables for functions
let playerSelection;       
let choices =  document.querySelectorAll("img");
let mainContent = document.querySelector("#main");
let result = document.querySelector('#player-result');
let comRes = document.querySelector('#computer-result');
let again = document.querySelector(".play-again");
let icon = document.createElement("img");
let message = document.createElement("div");
let header = document.querySelector("#welcome");
let footer = document.querySelector("footer");
let button = document.createElement("button");
   
   button.textContent = "Play Again";
   icon.src = "images/person.png";

//Add event listeners
choices.forEach(choice => choice.addEventListener("click", score));
choices.forEach(choice => choice.addEventListener("click", declareWinner));
button.addEventListener("click", playAgain);

//Add function to dictate a one round winner
function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return  "You won!";
    }else if (playerSelection === "rock" && computerSelection === "paper")  {
        return "You Lost";
    }else if (playerSelection === "paper" && computerSelection === "rock") {
        return  "You won!"; 
    }else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lost";
    }else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You won!" 
    }else if (playerSelection === "scissors" && computerSelection === "rock"){
        return "You Lost" 
    }}

//Add function to store each scores 
function score(Event) {
    let player = 0;
    let computer = 0;
    const computerSelection = getComputerChoice();
    const winer = String(playRound(Event.target.id, computerSelection));

    if  (true) {
        switch (true) {
            case winer === "You won!":
               return result.textContent = Number(result.textContent) +  Number(`${player = player + 1 }`)
            case winer === "You Lost":
               return comRes.textContent = Number(comRes.textContent) +  Number(`${computer = computer + 1}`)
        }
}
     Event.stopPropagation(); 
}  

//Add a function to announce a winner
function declareWinner() {
       if (result.textContent == 5) {
        header.textContent = ""
        mainContent.textContent = ""
        footer.textContent = ""
        footer.style.backgroundColor = ""
        message.textContent = "Congratulations! You Won!"
        message.style.color = "white";
        main.appendChild(icon)
        main.appendChild(message)
        main.appendChild(button)
        main.style.cssText = "display: flex; flex-direction: column; gap: 25px; margin-top: 100px"
        }
       else if (comRes.textContent == 5) {
        header.textContent = ""
        mainContent.textContent = ""
        footer.textContent = ""
        message.textContent = "Poor! You Lost!"
        message.style.color = "red";
        main.appendChild(icon)
        main.appendChild(message)
        main.appendChild(button)
        main.style.cssText = "display: flex; flex-direction: column; gap: 25px; margin-top: 100px"
       }
}

//Add a function to play again the game
function playAgain() {
    window.location.reload()
}
