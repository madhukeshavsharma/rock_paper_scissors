function playerChoice(playerSelection) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerSelection = choices[Math.floor(Math.random() * 3)];

    const result = document.getElementById("result");

    if (playerSelection === computerSelection) {
        result.textContent = `It's a tie! You both chose ${playerSelection}.`;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        result.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        result.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}
