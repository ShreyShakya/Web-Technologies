let humanScore = 0
let computerScore = 0

for (let i = 0; i < 5; i++) {
    let humanChoice = String(prompt("Please pick your move: ")).toLowerCase()
    let computerChoice = Math.floor(Math.random() * 3)

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
            humanScore++
            return "You won"
        } else if (humanChoice === 'scissors' && computerChoice === 1) {
            humanScore++
            return "You won"
        } else if (humanChoice === 'paper' && computerChoice === 0) {
            humanScore++
            return "You Won"
        } else if (humanChoice === 'rock' && computerChoice === 1) {
            computerScore++
            return "You Lose"
        } else if (humanChoice === 'scissors' && computerChoice === 0) {
            computerScore++
            return "You Lose"
        } else if (humanChoice === 'paper' && computerChoice === 2) {
            computerScore++
            return "You Lose"
        } else {
            return "Draw"
        }
    }
  
    console.log(getHumanChoice(humanChoice))
    console.log(getComputerChoice(computerChoice))
    console.log(selectWinner(humanChoice, computerChoice))
    console.log(`Your current score: ${humanScore}`)
    console.log(`Computer's score: ${computerScore}`)
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

console.log(finalScore(humanScore, computerScore))

