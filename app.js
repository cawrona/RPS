function computerPlay() {
    moves = ['rock', 'paper', 'scissors']
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
const result = document.querySelector('#result');

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    result.textContent = playRound('rock', computerPlay());
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    result.textContent = playRound('paper', computerPlay());
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    result.textContent = playRound('scissors', computerPlay());
});


// function game() {
//     for (let i = 0; i < 5; i++) {
//         let playerInput = prompt('Rock, paper, or scissors?');
//         let lowerCasePlayerInput = playerInput.toLowerCase();
//         console.log(playRound(lowerCasePlayerInput, computerPlay()));
//     }
// }

// game();
