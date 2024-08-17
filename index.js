let humanScore = 0;
let computerScore = 0;

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const result=document.getElementById('result');
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let num = getRandomInt(3);
    console.log("Computer Choice is: " + choices[num]);
    return choices[num];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        alert("It's a tie! Both get 1 point each");
        humanScore++;
        computerScore++;
    } else if (humanChoice === "Rock" && computerChoice === "Scissors" ||
               humanChoice === "Scissors" && computerChoice === "Paper" ||
               humanChoice === "Paper" && computerChoice === "Rock") {
        alert(`${humanChoice} beats ${computerChoice}! Player won this round.`);
        humanScore++;
    } else {
        alert(`${computerChoice} beats ${humanChoice}! Computer won this round.`);
        computerScore++;
    }
}

function roundnum(num) {
    let round = 0;
    function playGame(humanChoice) {
        if (round < num) {
            const computerSelection = getComputerChoice();
            playRound(humanChoice, computerSelection);
            round++;
            if (round === num) {
                let winStatus = "";
                if (humanScore > computerScore) {
                    winStatus = "Congratulations, Player Won!!!";
                } else if (humanScore < computerScore) {
                    winStatus = "Oops! Computer Won!! Try Again Good Luck";
                } else {
                    winStatus = "It's A Tie!!";
                }

                let res=(`Final Scores:\nComputer: ${computerScore}\nPlayer: ${humanScore}\n${winStatus}`);
                result.textContent=res;
            }
        }
    }
    rockButton.addEventListener('click', () => playGame('Rock'));
    paperButton.addEventListener('click', () => playGame('Paper'));
    scissorsButton.addEventListener('click', () => playGame('Scissors'));
}

function startGame() {
    const numRounds = parseInt(document.getElementById('num').value);

    if (isNaN(numRounds) || numRounds <= 0) {
        alert("Please enter a valid number of rounds.");
        return;
    }

    humanScore = 0; // Reset scores for a new game
    computerScore = 0;

    roundnum(numRounds);
}
