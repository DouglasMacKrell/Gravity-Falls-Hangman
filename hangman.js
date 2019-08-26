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

    // let resetButton = document.querySelector("")


    let arr = ["daddy", "bubble", "button", "stan", "grunkle", "dipper", "mabel", "soos", "mcgucket", "mcskermish", "greasys", "susan", "candy", "greta", "standord", "stanley", "dimensional", "caesar", "cipher", "blendin", "blandin", "journal", "cider", "summerween", "jackalope", "bigfoot", "alien", "gobblewonker", "mystery", "shack", "gravity", "triangle", "pacifica", "waddles"]

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
    document.getElementById("dash-holder").innerHTML = dashHolder.join("");

    console.log(dashHolder)
    console.log(caesarHolder)
    //console.log(dashHolder.join(""))

    let wrongAnswers = 0
    let win = false;

    
    
    let form = document.querySelector("#form4")
    
    form.addEventListener("submit", (event) => {
        let temp = dashHolder.join("")
        let userInput = document.querySelector("#user-input").value
        if (userInput === "") {
            event.preventDefault()
            window.alert("NO TEXT HAS BEEN ENTERED!")
        } else {
            event.preventDefault()
            alert.innerText = ""
            console.log(userInput)
            for(let i = 0; i < splitRandomWord.length; i++) {
                if (userInput === splitRandomWord[i]) {
                    dashHolder[i] = `${userInput}`;
                    console.log(dashHolder)
                    document.getElementById("dash-holder").innerHTML = (dashHolder.join("")).toUpperCase()
                }
            }
            if(temp == dashHolder.join("")) {
                wrongAnswers++
                console.log(wrongAnswers)
                console.log(typeof wrongAnswers)
            }
            if(wrongAnswers === 1) {
                document.querySelector("#energy1").style.visibility = "visible"
                console.log("gotcha")
            } else if (wrongAnswers === 2) {
                document.getElementById("energy2").style.visibility = "visible"
                console.log("gotcha2")
            } else if (wrongAnswers === 3) {
                document.getElementById("energy3").style.visibility = "visible"
            } else if (wrongAnswers === 4) {
                document.getElementById("energy4").style.visibility = "visible"
            } else if (wrongAnswers === 5) {
                document.getElementById("energy5").style.visibility = "visible"
            } else if (wrongAnswers === 6) {
                document.getElementById("energy6").style.visibility = "visible"
            }
         if (!dashHolder.includes("_ ")){
            console.log("You win!!!")
            document.getElementById("page5").style.display = "none"
            document.getElementById("you-win").style.display = "flex"
         } else if (wrongAnswers === 7) {
            console.log("You lose!")
            document.getElementById("page5").style.display = "none"
            document.getElementById("you-lose").style.display = "flex"
         }
        }
        document.getElementById("user-input").value = ""

    })
    
    


})