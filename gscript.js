let counter = 0;
let firstSelection = "";
let secondSelection = "";

const icons = document.querySelectorAll("#icons .icon");
icons.forEach((icon) => {
    icon.onclick = function(){
        // console.log(true);
        icon.classList.add("clicked");

        if(counter === 0){
            firstSelection = icon.getAttribute("icon");
            counter++;
        } else {
            secondSelection = icon.getAttribute("icon");
            counter = 0;

            if(firstSelection === secondSelection){
                const correctIcons = document.querySelectorAll(".icon[icon='" + firstSelection + "']");
                // icon.getAttribute("icon")
    
                correctIcons[0].classList.add("correct");
                correctIcons[0].classList.remove("clicked");
                correctIcons[1].classList.add("correct");
                correctIcons[1].classList.remove("clicked");
            } else {
                // const incorrectIcons = document.querySelectorAll(".icon[icon='" + secondSelection + "']");
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