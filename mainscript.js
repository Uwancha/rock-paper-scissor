const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    switch(randomNumber) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissor";
    }
}

let playerSelection; 
const computerSelection = getComputerChoice();
let win;
let lose;
let player = 0;
let computer = 0;



function playRound(playerSelection, computerSelection) {
     

    switch (true) {
        case playerSelection.toLowerCase() === "rock" && computerSelection === "scissor":
            win = console.log("You win! Rock beats scissor");
            player = player + 1
            break;
        case playerSelection.toLowerCase() === "rock" && computerSelection === "paper":
           lose = console.log("You lose! paper beats rock");
           computer = computer + 1
            break;
        case playerSelection.toLowerCase() === "paper" && computerSelection === "rock":
           win = console.log("You win! paper beats rock");
           player = player + 1
            break;
        case playerSelection.toLowerCase() === "paper" && computerSelection === "scissor":
            lose = console.log("You lose! scissor beats paper");
            computer = computer + 1
            break;
        case playerSelection.toLowerCase() === "scissor" && computerSelection === "paper":
            win = console.log("You win! scissor beats paper");
            player = player + 1
            break;
        case playerSelection.toLowerCase() === "scissor" && computerSelection === "rock":
            lose = console.log("You lose! rock beats scissor");
            computer = computer + 1
            break;
        case playerSelection.toLowerCase() === computerSelection:
            const tie = console.log("It is a tie. Please try again");
            break;
    }
                        
}

function game(){
    for (let i = 0; i < 5; i++) {
        
        if (i === 0) {
            playerSelection = prompt("Enter your selecton: ");
            console.log(`You: ${playerSelection.toLowerCase()} computer: ${computerSelection}`);

            playRound(playerSelection, computerSelection);
            
            
            
            console.log(`Round: 1 => You ${player} , computer ${computer}`); 
        }
            
        else if (i === 1) {
            playerSelection = prompt("Enter your selecton: ");
            console.log(`You: ${playerSelection.toLowerCase()} computer: ${computerSelection}`);

            playRound(playerSelection, computerSelection);
            
                 console.log(`Round: 2 => You ${player} , computer ${computer}`); 
            }
            
            
            
        else if (i === 2) {
            playerSelection = prompt("Enter your selecton: ");
            console.log(`You: ${playerSelection.toLowerCase()} computer: ${computerSelection}`);

            playRound(playerSelection, computerSelection);
            
            
            console.log(`Round: 3 => You ${player} , computer ${computer}`);
        } 
           
        else if (i === 3) {
            playerSelection = prompt("Enter your selecton: ");
            console.log(`You: ${playerSelection.toLowerCase()} computer: ${computerSelection}`);

            playRound(playerSelection, computerSelection);
            
            
            
            console.log(`Round: 4 => You ${player} , computer ${computer}`);
        } 
          
        else if (i === 4) {
            playerSelection = prompt("Enter your selecton: ");
            console.log(`You: ${playerSelection.toLowerCase()} computer: ${computerSelection}`);

            playRound(playerSelection, computerSelection);
            
            
            console.log(`Round: 5 => You ${player} , computer ${computer}`); 
            if (player > computer) {
                console.log("Congratulations! You win!");
            }
            else if (computer > player) {
                console.log("Poor! You lose!");
            }
            else if (player === computer) {
                console.log("It is a tie. Play again!")
            }
           

        }
    }
    
    
       
}
(game());


