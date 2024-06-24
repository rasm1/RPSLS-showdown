const buttons = document.getElementsByClassName('game-options');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const choices = ['Rock', 'Paper', 'Scissors', 'lizard', 'spock'];

/**
 * loops through buttons and adds event listener to each
 */
for(let button of buttons){
    button.addEventListener('click', function(){
        let playerChoice = this.getAttribute("data-choice");
        runGame(playerChoice);
    });
}
function runGame(playerChoice) {
    let computerChoice = choices[Math.floor(Math.random() * 5)];
    let result = checkWinner(choices[computerChoice], choices[playerChoice]);
    incrementScores(result);
}

/**
 * checks to see who won
 */
function checkWinner(choices[playerChoice], choices[computerChoice]) {
    if

}



function incrementScores() {

}
