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
    return "You Won"
  } else if (humanChoice === 'scissors' && computerChoice === 1) {
    return "You Won"
  } else if (humanChoice === 'paper' && computerChoice === 0) {
    return "You Won"
  } else if (humanChoice === 'rock' && computerChoice === 1) {
    return "You Lose"
  } else if (humanChoice === 'scissors' && computerChoice === 0) {
    return "You Lose"
  } else if (humanChoice === 'paper' && computerChoice === 2) {
    return "You Lose"
  } else {
    return "Draw"
  }
}

function finalScore(humanScore, computerScore) {
  if (humanScore > computerScore) {
    return "You won!"
  } else if (computerScore > humanScore) {
    return "Computer won!"
  } else {
    return "It's a draw!"
  }
}

let humanScore = 0
let computerScore = 0
let roundsPlayed = 0

function playGame(humanChoice) {

  if (roundsPlayed === 5) {
    return
  }

  let computerChoice = Math.floor(Math.random() * 3)

  console.log(getHumanChoice(humanChoice))
  console.log(getComputerChoice(computerChoice))
  compPick.textContent = getComputerChoice(computerChoice)

  let result = selectWinner(humanChoice, computerChoice)
  console.log(result)

  if (result === 'You Won') {
    humanScore++
  } else if (result === 'You Lose') {
    computerScore++
  }

  hScore.textContent = `Human Score: ${humanScore}`
  cScore.textContent = `Computer Score: ${computerScore}`

  roundsPlayed++
  if (roundsPlayed === 5) {
    compPick.textContent = ""
    gameWinner.textContent = finalScore(humanScore, computerScore)
  }
}

const rockBtn = document.querySelector("#rock")
const paperBtn = document.querySelector("#paper")
const scissorsBtn = document.querySelector("#scissors")
const hScore = document.querySelector('#human-score')
const cScore = document.querySelector('#computer-score')
const gameWinner = document.querySelector('#winner')
const compPick = document.querySelector('#show-computer-choice')

rockBtn.addEventListener("click", function () {
  playGame('rock')
})

paperBtn.addEventListener("click", function () {
  playGame('paper')
})

scissorsBtn.addEventListener("click", function () {
  playGame('scissors')
})

