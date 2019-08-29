document.addEventListener("DOMContentLoaded", () => {
    
    
    
    let youDoWantTo = document.querySelector("#yes")
    youDoWantTo.addEventListener("click", () => {
        
        document.getElementById("chiptune").play()        
        document.getElementById("page1").style.display = "none"
        document.getElementById("page2").style.display = "grid"
    })

    let youDoNotWantTo = document.querySelector("#no")
    youDoNotWantTo.addEventListener("click", () => {
        window.location.href = "http://BigMacKrell.com"
    })

    let turnToPage3 = document.getElementById("press-to-talk1")
    turnToPage3.addEventListener("click", () => {
        
        document.getElementById("page2").style.display = "none"
        document.getElementById("page3").style.display = "grid"
    })

    let turnToPage4 = document.getElementById("press-to-talk2")
    turnToPage4.addEventListener("click", () => {
        
        document.getElementById("page3").style.display = "none"
        document.getElementById("page4").style.display = "grid"
    })

    let turnToPage5 = document.getElementById("press-to-talk3")
    turnToPage5.addEventListener("click", () => {
        
        document.getElementById("page4").style.display = "none"
        document.getElementById("page5").style.display = "grid"
    })

    let arr = ["stan", "grunkle", "dipper", "mabel", "soos", "mcgucket", "mcskermish", "greasys", "susan", "candy", "greta", "stanford", "stanley", "dimensional", "caesar", "cipher", "blendin", "blandin", "journal", "cider", "summerween", "jackalope", "bigfoot", "alien", "gobblewonker", "mystery", "shack", "gravity", "triangle", "pacifica", "waddles", "mackerel", "swine", "bottomless"]

    let threeLettersBack = "DEFGHIJKLMNOPQRSTUVWXYZABC"

    let decodedAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    let randomWord = arr[Math.floor(Math.random() * arr.length)]

    console.log(`CHEAT CODE ACCEPTED: \nTHE ANSWER IS ${randomWord}`)

    let splitRandomWord = randomWord.split("")

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
    
    let letterCatcher = []
    console.log(letterCatcher)

    document.getElementById("encoded-word").innerHTML = caesarHolder
    document.getElementById("dash-holder").innerHTML = dashHolder.join("");
    document.getElementById("correct-answer").innerHTML = `THE CORRECT ANSWER WAS: ${randomWord.toUpperCase()}`
    
    let wrongAnswers = 0
    
    
    let form = document.querySelector("#form4")
    
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        let temp = dashHolder.join("")
        let userInput = (document.querySelector("#user-input").value).toLowerCase()
        if (userInput === "") {
            window.alert("NO TEXT HAS BEEN ENTERED!")
        } else if (letterCatcher.includes(userInput.toUpperCase())) {
            
            console.log("gotcha")
            window.alert("THAT'S THE SAME LETTER!")
            document.getElementById("user-input").value = ""
        } else {
            
            for(let i = 0; i < splitRandomWord.length; i++) {
                if (userInput === splitRandomWord[i]) {
                    dashHolder[i] = `${userInput}`;
                    document.getElementById("dash-holder").innerHTML = (dashHolder.join("")).toUpperCase()
                }
            }
            if(temp == dashHolder.join("")) {
                wrongAnswers++
            }
            letterCatcher.push(userInput.toUpperCase())
            document.getElementById("player-choice").innerHTML = `YOU HAVE ENTERED: ${letterCatcher}, `
            if(wrongAnswers === 1) {
                document.querySelector("#energy1").style.visibility = "visible"
            } else if (wrongAnswers === 2) {
                document.getElementById("energy2").style.visibility = "visible"
            } else if (wrongAnswers === 3) {
                document.getElementById("energy3").style.visibility = "visible"
            } else if (wrongAnswers === 4) {
                document.getElementById("energy4").style.visibility = "visible"
            } else if (wrongAnswers === 5) {
                document.getElementById("energy5").style.visibility = "visible"
            } else if (wrongAnswers === 6) {
                document.getElementById("energy6").style.visibility = "visible"
                document.getElementById("final-dipper").src = "./Dipper Panicked CROP.png"
            }
            if (!dashHolder.includes("_ ")){
                document.getElementById("page5").style.display = "none"
                document.getElementById("you-win").style.display = "flex"
            } else if (wrongAnswers === 7) {
                document.getElementById("page5").style.display = "none"
                document.getElementById("you-lose").style.display = "flex"
            }
        }
        document.getElementById("user-input").value = ""

    })
    
    


})