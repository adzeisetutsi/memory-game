let counter = 0;
let firstSelection = "";
let secondSelection = "";

// Obtaining the Parameters
let parameters = new URLSearchParams(window.location.search)

// Obtaining the theme Parameters
let themeParameter = parameters.get("theme")

// Obtaining the number-of-players Parameters
let numberOfPlayersParameter = parameters.get("numberOfPlayers")

// Obtaining the grid-size Parameters
let gridSizeParameter = parameters.get("gridSize")

// Function to load what the player selected
const loadIcon4x4 = (theme,grid) => {
    if ( theme === "Icons" && grid === "4x4") {
        document.getElementById("theme").style.opacity = "1"
        document.querySelector(".icon-6x6").remove();
        document.querySelector(".num-4x4").remove();
        document.querySelector(".num-6x6").remove();
    } else if ( theme === "Icons" && grid === "6x6"){
        document.getElementById("theme2").style.opacity = 1;
        document.querySelector(".icon-4x4").remove();
        document.querySelector(".num-4x4").remove();
        document.querySelector(".num-6x6").remove();
    } else if ( theme === "Numbers" && grid === "4x4"){
        document.getElementById("theme3").style.opacity = 1;
        document.querySelector(".icon-4x4").remove();
        document.querySelector(".icon-6x6").remove();
        document.querySelector(".num-6x6").remove();
    } else {
        document.getElementById("theme4").style.opacity = 1;
        document.querySelector(".icon-4x4").remove();
        document.querySelector(".icon-6x6").remove();
        document.querySelector(".num-4x4").remove();
    }
}

window.addEventListener("load", function(){
    loadIcon4x4(themeParameter, gridSizeParameter)
});



// The function for the game's logic
const logicFunction = (a) => {
    const icons = document.querySelectorAll(a);
icons.forEach((icon) => {
    icon.onclick = function(){
        icon.classList.add("clicked");

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
            } else {
                const incorrectIcons = document.querySelectorAll(".icon.clicked")
    
                incorrectIcons[0].classList.add("incorrect");
                incorrectIcons[1].classList.add("incorrect");
    
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

