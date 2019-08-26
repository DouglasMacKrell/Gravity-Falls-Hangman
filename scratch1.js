let readlineSync = require('readline-sync');

let arr = ["daddy", "bubble", "button"]

let randomWord = arr[Math.floor(Math.random() * arr.length)]

console.log(randomWord)

let splitRandomWord = randomWord.split("")

console.log(splitRandomWord)

let threeLettersBack = "DEFGHIJKLMNOPQRSTUVWXYZABC"

let decodedAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

let dashHolder = []

for (let i = 0; i < splitRandomWord.length; i++) {
  dashHolder.push("_ ");
}

let caesarHolder = ""

for (let i = 0; i < splitRandomWord.length; i++) {
    for (let j = 0; j < decodedAlpha.length; j++) {
        if (splitRandomWord[i].toUpperCase() === decodedAlpha[j]) {
            caesarHolder += threeLettersBack[j]
        }
    }
}

// console.log(dashHolder)
console.log(caesarHolder)
console.log(dashHolder.join(""))

let wrongAnswers = 0
let win = false;

 let userInput;

function getCharacter() {
  let temp = dashHolder.join('');
  userInput = readlineSync.question(`Guess character: \n`)
  for (let i = 0; i < splitRandomWord.length; i++) {
    if (userInput === splitRandomWord[i]) {
      dashHolder[i] = `${userInput} `;
    }
  }
  console.log(dashHolder.join(""))
  console.log(caesarHolder)
//   console.log(dashHolder)
  if (temp == dashHolder.join('')) {
    wrongAnswers++
  }
}

// getCharacter()
// getCharacter()

while (!win && wrongAnswers < 6) {
  console.log(win)
  getCharacter()
  let dashesCounter = 0
  for (let i = 0; i < dashHolder.length; i++){
    if (dashHolder[i] === '_ '){
      dashesCounter++
    }
  }
  if (wrongAnswers === 6) {
    console.log("You lose!")
  }
  if (dashesCounter > 0) {
    win = false
  } else {
    win = true;
    console.log("You win!!!")
  }
  console.log(`THIS ONE`,win)
  console.log(wrongAnswers)
}
