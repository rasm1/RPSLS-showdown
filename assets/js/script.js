const buttons = document.getElementsByClassName('game-option');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
let resultDisplay = document.getElementById('resultDisplay');
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
let playerScoreStandard = 0;
let computerScoreStandard = 0;


/**
 * loops through buttons and adds event listener to each
 */
for (let button of buttons) {
    button.addEventListener('click', function () {
        let playerChoice = this.getAttribute("data-choice");
        runGame(playerChoice);
    });
}
/**
 * runs the game and generates computer choice 
 */
function runGame(playerChoice) {
    let computerChoice = choices[Math.floor(Math.random() * 5)];
    checkWinner(playerChoice, computerChoice);
}

/**
 * Checks to see who the winner is and updates the result, also tallies up score and adds color to result
 */
function checkWinner(playerChoice, computerChoice) {
    let result = '';
    if (playerChoice === computerChoice) {
        result = 'YOU TIED';
        resultDisplay.innerHTML = result;
        resultDisplay.classList.remove('green-text', 'red-text');
        return;
    }
    switch (playerChoice) {
        case 'rock':
            result = (computerChoice === 'scissors' || computerChoice === 'lizard') ? 'YOU WIN' : "YOU LOSE";
            break;
        case 'scissors':
            result = (computerChoice === 'lizard' || computerChoice === 'paper') ? "YOU WIN" : "YOU LOSE";
            break;
        case 'paper':
            result = (computerChoice === 'rock' || computerChoice === 'spock') ? "YOU WIN" : "YOU LOSE";
            break;
        case 'lizard':
            result = (computerChoice === 'paper' || computerChoice === 'spock') ? "YOU WIN" : "YOU LOSE";
            break;
        case 'spock':
            result = (computerChoice === 'rock' || computerChoice === 'scissors') ? "YOU WIN" : "YOU LOSE";
    }



    /* displays what choice the player and computer make */
    playerDisplay.innerHTML = `you picked: ${playerChoice}`;
    computerDisplay.innerHTML = `the computer picked: ${computerChoice}`;
    resultDisplay.innerHTML = result;

    /* adds the color to the result and tallies up score */
    resultDisplay.classList.remove('green-text', 'red-text');
    switch (result) {
        case "YOU WIN":
            resultDisplay.classList.add('green-text');
            playerScoreStandard++;
            playerScore.textContent = playerScoreStandard;
            break;
        case "YOU LOSE":
            resultDisplay.classList.add('red-text');
            computerScoreStandard++;
            computerScore.textContent = computerScoreStandard;
            break;
    }
   
    /* modal */
    var modal = document.getElementById("myModal");

    

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // get the text inside the modal
    var modalText = document.getElementById('modalText');

    // get the reset button
    var reset = document.getElementById('resetButton');

   

    /* win condition */
    if (playerScoreStandard === 10) {
        modal.style.display = "block";
        modalText.textContent = "Congratulations! you have beaten the computer and are a true rpsls master! Try again?";
    } else if (computerScoreStandard === 10) {
        modalText.textContent = "The computer was one step ahead of you! Try again?";
        modal.style.display = "block";
    }

    /* reset button*/
    reset.onclick = function () {
        playerScore.textContent = 0;
        computerScore.textContent = 0;
        playerScoreStandard = 0;
        computerScoreStandard = 0;
        modal.style.display = "none";
    };
}