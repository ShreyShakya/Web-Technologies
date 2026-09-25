function getHumanChoice(humanChoice) {
  if (humanChoice === 'rock') {
    return "You chose rock"
  } else if (humanChoice === 'paper') {
    return "You chose paper"
  } else if (humanChoice === 'scissors') {
    return "you chose scissors"
  } else {
    return "please enter a valid humanChoice"
  }
}

function getComputerChoice(computerChoice) {
  if (computerChoice === 0) {
    return "Computer chose: rock"
  } else if (computerChoice === 1) {
    return "Computer chose: paper"
  } else if (computerChoice === 2) {
    return "computer chose: scissors"
  }
}
function selectWinner(humanChoice, computerChoice) {
  if (humanChoice === 'rock' && computerChoice === 2) {
    return roundWinner.textContent = "You Won"
  } else if (humanChoice === 'scissors' && computerChoice === 1) {
    return roundWinner.textContent = "You Won"
  } else if (humanChoice === 'paper' && computerChoice === 0) {
    return roundWinner.textContent = "You Won"
  } else if (humanChoice === 'rock' && computerChoice === 1) {
    return roundWinner.textContent = "Computer Won"
  } else if (humanChoice === 'scissors' && computerChoice === 0) {
    return roundWinner.textContent = "Computer Won"
  } else if (humanChoice === 'paper' && computerChoice === 2) {
    return roundWinner.textContent = "Computer Won"
  } else {
    return roundWinner.textContent = "Draw"
  }
}

function finalScore(humanScore, computerScore) {
  if (humanScore > computerScore) {
    return "Human won!"
  } else if (computerScore > humanScore) {
    return "Computer won!"
  } else {
    return "It's a draw!"
  }
}

function playGame(humanChoice) {
  let humanScore = 0
  let computerScore = 0

    let computerChoice = Math.floor(Math.random() * 3)

    console.log(getHumanChoice(humanChoice))
    console.log(getComputerChoice(computerChoice))

    let result = selectWinner(humanChoice, computerChoice)
    console.log(result)

    if (result === 'You Won') {
      humanScore++
    } else if (result === 'You Lose') {
      computerScore++
    }

    hScore.textContent = `Human Score: ${humanScore}`
    cScore.textContent = `Computer Score: ${computerScore}`
  }

const rockBtn = document.querySelector("#rock")
const paperBtn = document.querySelector("#paper")
const scissorsBtn = document.querySelector("#scissors")
const scoreBoard = document.querySelector('#score-board')
const roundWinner = document.querySelector('#round-winner')
const hScore = document.querySelector('#human-score')
const cScore = document.querySelector('#computer-score')

rockBtn.addEventListener("click", function() {
  playGame('rock')
})

paperBtn.addEventListener("click", function() {
  playGame('paper')
})

scissorsBtn.addEventListener("click", function() {
  playGame('scissors')
})

