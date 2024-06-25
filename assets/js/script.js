const buttons = document.getElementsByClassName('game-option');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];




/**
 * loops through buttons and adds event listener to each
 */

for (let button of buttons) {
    button.addEventListener('click', function () {
        let playerChoice = this.getAttribute("data-choice");
        runGame(playerChoice);
    });
}

function runGame(playerChoice) {
    let computerChoice = choices[Math.floor(Math.random() * 5)];
    checkWinner(playerChoice, computerChoice);

}

function checkWinner(playerChoice, computerChoice) {
    let result = '';
    if (playerChoice === computerChoice) {
        result = 'TIED!';
    } else {
        switch (playerChoice) {
            case 'rock':
                result = (computerChoice === 'scissors' || computerChoice ==='lizard') ? 'YOU WIN' : "YOU LOSE"
                break;
            case 'scissors':
                result = (computerChoice === 'lizard' || computerChoice ==='paper') ? "YOU WIN" : "YOU LOSE"
                break;
            case 'paper':
                result = (computerChoice === 'rock' || computerChoice ==='spock') ? "YOU WIN" : "YOU LOSE"
                break;
            case 'lizard':
                result = (computerChoice === 'paper' || computerChoice ==='spock') ? "YOU WIN" : "YOU LOSE"
                break;
            case 'spock':
                result = (computerChoice === 'rock' || computerChoice ==='scissors') ? "YOU WIN" : "YOU LOSE"
        }
        console.log(result);
        console.log(playerChoice);
        console.log(computerChoice);


    };
}
/**
 * checks to see who won
 */