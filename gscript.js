let counter = 0;
let firstSelection = "";
let secondSelection = "";
let timer;
let moves = 0;
let runTimerOnce = 0;
let soloPairs = 0;


// Obtaining the Parameters
let parameters = new URLSearchParams(window.location.search)

// Obtaining the theme Parameters
let themeParameter = parameters.get("theme")

// Obtaining the number-of-players Parameters
let numberOfPlayersParameter = parameters.get("numberOfPlayers")

// Obtaining the grid-size Parameters
let gridSizeParameter = parameters.get("gridSize")

// Timer function
const startTimer = () => {
    let min = 0
    let sec = 0;
    timer = setInterval(() => {
        document.querySelector(".sec").innerHTML = min + ":" + "0"+ sec;
        
        if (sec < 59){
            if (sec > 9){
                document.querySelector(".sec").innerHTML = min + ":" + sec;
                }
            sec++;
        }         
        else {
            document.querySelector(".sec").innerHTML = min + ":" + sec;
            sec = 0;
            min++;
        }
    }, 1000) 
}

// Function to stop timer
const stopTimer = () => {
    clearInterval(timer);
}




// console.log(timer)
// Function to load what the player selected
const loadIcon4x4 = (theme,grid,players) => {
    if ( theme === "Icons" && grid === "4x4") {
        document.getElementById("theme").style.opacity = "1";
        document.querySelector(".icon-6x6").remove();
        document.querySelector(".num-4x4").remove();
        document.querySelector(".num-6x6").remove();
        if (players === "1") {
            document.querySelector(".stats").style.opacity = 1;
            }
    } else if ( theme === "Icons" && grid === "6x6"){
        document.getElementById("theme2").style.opacity = 1;
        document.querySelector(".icon-4x4").remove();
        document.querySelector(".num-4x4").remove();
        document.querySelector(".num-6x6").remove();
        if (players === "1") {
            document.querySelector(".stats").style.opacity = 1;
            }
    } else if ( theme === "Numbers" && grid === "4x4"){

        document.getElementById("theme3").style.opacity = 1;
        document.querySelector(".icon-4x4").remove();
        document.querySelector(".icon-6x6").remove();
        document.querySelector(".num-6x6").remove();
        if (players === "1") {
            document.querySelector(".stats").style.opacity = 1;
            }
    } else if ( theme === "Numbers" && grid === "6x6") {
        document.getElementById("theme4").style.opacity = 1;
        document.querySelector(".icon-4x4").remove();
        document.querySelector(".icon-6x6").remove();
        document.querySelector(".num-4x4").remove();
        if (players === "1") {
            document.querySelector(".stats").style.opacity = 1;
            }
    } 
    else {
        document.querySelector(".icon-4x4").remove();
        document.querySelector(".icon-6x6").remove();
        document.querySelector(".num-4x4").remove();
        document.querySelector(".num-6x6").remove();
    }
}

window.addEventListener("load", function(){
    loadIcon4x4(themeParameter, gridSizeParameter, numberOfPlayersParameter)
});

let popup = document.getElementById("popup");
let soloMovesTaken = document.querySelector(".moves-taken");
let elapsedTime = document.querySelector(".time-elapsed");



// Function to display the results
const displayResults = () => {
    popup.style.visibility = "visible";
    popup.style.transform = "scale(1)";
    popup.style.top = "130px";
    document.body.style.background = "rgba(0,0,0,0.6)";
    soloMovesTaken.innerHTML+=  moves + " " + "Moves";
    elapsedTime.innerHTML += document.querySelector(".sec").innerHTML;
}
// menu.addEventListener("click",displayResults);




// The function for the game's logic
const logicFunction = (a) => {
    const icons = document.querySelectorAll(a);
    icons.forEach((icon) => {
        icon.onclick = function(){
            icon.classList.add("clicked");
                        
            
            // Calling the timer function
        if (runTimerOnce === 0){
            startTimer();
            runTimerOnce++;
        }
            
        // console.log(icon);
        if(counter === 0){
            firstSelection = icon.getAttribute("icon");
            counter++;
        } else {
            secondSelection = icon.getAttribute("icon");
            counter = 0;

            if(firstSelection === secondSelection){
                const correctIcons = document.querySelectorAll(".icon[icon='" + firstSelection + "']");
                
                correctIcons[0].classList.add("correct");
                correctIcons[0].classList.remove("clicked");
                correctIcons[1].classList.add("correct");
                correctIcons[1].classList.remove("clicked");
                // console.log(correctIcons[0])
                if(icons && correctIcons[0] && numberOfPlayersParameter === "1"){
                    moves++;
                    // console.log(moves)
                }

                
                // Determines the moves made by a solo player and gives results
                if (correctIcons[1] && numberOfPlayersParameter === "1"){
                    soloPairs++;
                    document.querySelector(".mov").innerHTML = moves;
                    if(soloPairs === 8 && gridSizeParameter === "4x4"){
                        // console.log("well done"); 
                        displayResults();
                        stopTimer();
                
                    }
                    else if (soloPairs === 18 && gridSizeParameter === "6x6"){
                        // console.log("well done");
                        displayResults();
                        stopTimer();
                    }
                }
                



            } else {
                const incorrectIcons = document.querySelectorAll(".icon.clicked");
                
                incorrectIcons[0].classList.add("incorrect");
                incorrectIcons[1].classList.add("incorrect");

                if(icons && incorrectIcons[0] && numberOfPlayersParameter === "1"){
                    moves++;
                    document.querySelector(".mov").innerHTML = moves;
                    // console.log(moves)
                }
    
                setTimeout(() => {
                incorrectIcons[0].classList.remove("incorrect");
                incorrectIcons[0].classList.remove("clicked");
                incorrectIcons[1].classList.remove("incorrect");
                incorrectIcons[1].classList.remove("clicked");
                },600 )
            }
        }
    } 
    
})
}
logicFunction("#icons1 .icon")
logicFunction("#icons2 .icon")
logicFunction("#icons3 .icon")
logicFunction("#icons4 .icon")

// var startTime, endTime;

// function start() {
//     startTime = new Date();
// };

// function end() {
//     let min = 0;
//     endTime = new Date();
//   var timeDiff = endTime - startTime; //in ms
//   // strip the ms
//     timeDiff /= 1000;

//   // get seconds 
//     var seconds = Math.round(timeDiff);
//     if (seconds < 59){
        
//         document.querySelector(".time-elapsed").innerHTML = min + ":" + seconds;
//         // sec++;
//     }         
//     else {
//         document.querySelector(".time-elapsed").innerHTML = min + ":" + seconds;
//         seconds = 0;
//         min++;
//     }
//     console.log(seconds + " seconds");
// }
// let menu = document.getElementById("menu-btn");
// let stopMe = document.querySelector("#stop");

// menu.addEventListener("click", start);
// stopMe.addEventListener("click", end);


