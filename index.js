const random = require('random')
const delay = require('delay');
const colors = require('colors');

var numberToChoice = {
  "1": "Rock",
  "2": "Paper",
  "3": "Scissors"
}

console.log('1) Rock\n2) Paper\n3) Scissors')
var userNumberChoice = prompt('Enter your choice ')

while(!numberToChoice.hasOwnProperty(userNumberChoice)) {
  console.log('Uh-Oh, your choice has to be between 1 and 3, try again!')
  var userNumberChoice = prompt('Enter your choice ')
}

var computerNumberChoice = random.int(min = 1, max = 3)

const play = async (_userChoice, _computerChoice) => {
  // Rock Paper Scissors Shoot Loading Thing
  console.log('OK !')
  await delay(1000)
  console.clear()
  console.log('Rock,')
  await delay(1000)
  console.log('Paper,')
  await delay(1000)
  console.log('Scissors,')
  await delay(1000)
  console.log('Shoot!\n')
  await delay(1000)

  // Find and show winner
  let _winner
  // User Chose Rock
  if(numberToChoice[_userChoice] == "Rock") {
    if(numberToChoice[_computerChoice] == "Rock") {
      _winner = "Tie"
    }
    if(numberToChoice[_computerChoice] == "Paper") {
      _winner = "Computer"
    }
    if(numberToChoice[_computerChoice] == "Scissors") {
      _winner = "User"
    }
  }
  // User Chose Paper
  else if(numberToChoice[_userChoice] == "Paper") {
    if(numberToChoice[_computerChoice] == "Rock") {
      _winner = "User"
    }
    if(numberToChoice[_computerChoice] == "Paper") {
      _winner = "Tie"
    }
    if(numberToChoice[_computerChoice] == "Scissors") {
      _winner = "Computer"
    }
  }
  // User Chose Scissors
  else if(numberToChoice[_userChoice] == "Scissors") {
    if(numberToChoice[_computerChoice] == "Rock") {
      _winner = "Computer"
    }
    if(numberToChoice[_computerChoice] == "Paper") {
      _winner = "User"
    }
    if(numberToChoice[_computerChoice] == "Scissors") {
      _winner = "Tie"
    }
  }

  // Announce Winner
  switch(_winner) {
    case "User":
      console.log(colors.brightGreen("You Win! 😎"))
      console.log(`You picked ${numberToChoice[_userChoice]}, and Computer picked ${numberToChoice[_computerChoice]}!`)
      break;
    case "Computer":
      console.log(colors.brightRed("You Lose 😞"))
      console.log(`You picked ${numberToChoice[_userChoice]}, and Computer picked ${numberToChoice[_computerChoice]}`)
      break;
    case "Tie":
      console.log(colors.brightYellow("Tie 😅"))
      console.log(`You picked ${numberToChoice[_userChoice]}, and Computer picked ${numberToChoice[_computerChoice]} as well.`)
      break;
  }

}

play(userNumberChoice, computerNumberChoice)