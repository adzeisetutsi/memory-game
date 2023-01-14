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
        document.getElementById("icon-4x4").style.opacity = "1"
    }
}
window.addEventListener("load", function(){
    loadIcon4x4(themeParameter, gridSizeParameter)
});



const icons = document.querySelectorAll("#icons .icon");
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
        // console.log(firstSelection);
        // console.log(secondSelection);
        
        
        
    }
    
})

/*
<i class="fa-solid fa-0"></i>
<i class="fa-solid fa-1"></i>
<i class="fa-solid fa-2"></i>
<i class="fa-solid fa-3"></i>
<i class="fa-solid fa-4"></i>
<i class="fa-solid fa-5"></i>
<i class="fa-solid fa-6"></i>
<i class="fa-solid fa-7"></i>
<i class="fa-solid fa-8"></i>
<i class="fa-solid fa-9"></i>
*/