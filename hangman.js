document.addEventListener("DOMContentLoaded", () => {
    event.preventDefault()

    let youDoWantTo = document.querySelector("#yes")
    youDoWantTo.addEventListener("click", () => {
        console.log("clicked p2")
        event.preventDefault()
        document.getElementById("page1").style.display = "none"
        document.getElementById("page2").style.display = "flex"
    })

    let youDoNotWantTo = document.querySelector("#no")
    youDoNotWantTo.addEventListener("click", () => {
        console.log("clicked no")
        window.location.href = "http://BigMacKrell.com"
    })

    let turnToPage3 = document.getElementById("press-to-talk1")
    turnToPage3.addEventListener("click", () => {
        console.log("clicked p3")
        event.preventDefault()
        document.getElementById("page2").style.display = "none"
        document.getElementById("page3").style.display = "flex"
    })

    let turnToPage4 = document.getElementById("press-to-talk2")
    turnToPage4.addEventListener("click", () => {
        console.log("clicked p4")
        event.preventDefault()
        document.getElementById("page3").style.display = "none"
        document.getElementById("page4").style.display = "flex"
    })

    let turnToPage5 = document.getElementById("press-to-talk3")
    turnToPage5.addEventListener("click", () => {
        console.log("clicked p5")
        event.preventDefault()
        document.getElementById("page4").style.display = "none"
        document.getElementById("page5").style.display = "flex"
    })


    let arr = ["daddy", "bubble", "button"]

    let threeLettersBack = "DEFGHIJKLMNOPQRSTUVWXYZABC"

    let decodedAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    let randomWord = arr[Math.floor(Math.random() * arr.length)]

    console.log(randomWord)

    let splitRandomWord = randomWord.split("")

    console.log(splitRandomWord)

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

    document.getElementById("encoded-word").innerHTML = caesarHolder

    document.getElementById()

    console.log(dashHolder)
    console.log(caesarHolder)
    //console.log(dashHolder.join(""))

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
    console.log(dashHolder)

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
})