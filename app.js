moves = ['rock', 'paper', 'scissors'];

// Random number generator function that returns a random number between 0 and 2.
function computerPlay() {
    return moves[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'draw';
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'You win! Rock beats scissors';
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'You lose! Paper beats rock';
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'You win! Paper beats rock';
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'You lose! Scissors beats paper';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'You win! Scissors beats paper';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'You lose! Rock beats scissors';
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerInput = prompt('Rock, paper, or scissors?');
        let lowerCasePlayerInput = playerInput.toLowerCase();
        console.log(playRound(lowerCasePlayerInput, computerPlay()));
    }
}

game();
