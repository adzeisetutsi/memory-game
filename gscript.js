let counter = 0;
let firstSelection = "";
let secondSelection = "";
let timer;
let soloMoves = 0;
let runTimerOnce = 0;
let soloPairs = 0;
let batch1Player1Score = 0;
let batch1Player2Score = 0;

let batch1Index = [1,2];
let batch1ActivePlayer = 0;
let batch1PlayerMoves = [0,0];

let batch2Index = [1,2,3];
let batch2ActivePlayer = 0;
let batch2PlayerMoves = [0,0,0];

let batch3Index = [1,2,3,4];
let batch3ActivePlayer = 0;
let batch3PlayerMoves = [0,0,0,0];

let currentTurn1 = document.querySelector(".current-turn1");
let currentTurn2 = document.querySelector(".current-turn2");


let currentTurn01 = document.querySelector(".current-turn01");
let currentTurn02 = document.querySelector(".current-turn02");
let currentTurn03 = document.querySelector(".current-turn03");
let currentTurn04 = document.querySelector(".current-turn04");

let currentTurn001 = document.querySelector(".current-turn001");
let currentTurn002 = document.querySelector(".current-turn002");
let currentTurn003 = document.querySelector(".current-turn003");
let currentTurn004 = document.querySelector(".current-turn004");




// Obtaining the Parameters
let parameters = new URLSearchParams(window.location.search)

// Obtaining the theme Parameters
let themeParameter = parameters.get("theme")

// Obtaining the number-of-players Parameters
let numberOfPlayersParameter = parameters.get("numberOfPlayers")

// Obtaining the grid-size Parameters
let gridSizeParameter = parameters.get("gridSize")


// The menu popup
let selectMenuPopup = document.getElementById("menu-btn");
let menuPopup = document.getElementById("menu-btn-popup");

const menuPopupFunc = () => {
    menuPopup.style.visibility = "visible";
    menuPopup.style.transform = "scale(1)";
    menuPopup.style.top = "170px";
    document.body.style.background = "rgba(0,0,0,0.6)";
}
selectMenuPopup.addEventListener("click", menuPopupFunc);



// Timer function
const startTimer = () => {
    let min = 0
    let sec = 0;
    timer = setInterval(() => {
        let displayTime = document.querySelector(".sec");

        displayTime.innerHTML = min + ":" + "0"+ sec;
        
        if (sec < 59){
            if (sec > 9){
                displayTime.innerHTML = min + ":" + sec;
                }
            sec++;
        }         
        else {
            displayTime.innerHTML = min + ":" + sec;
            sec = 0;
            min++;
        }
    }, 1000) 
}

// Function to stop timer
const stopTimer = () => {
    clearInterval(timer);
}




// Function to load what the player selected
const loadIcon4x4 = (theme,grid,players) => {
    if ( theme === "Icons" && grid === "4x4") {
        document.getElementById("theme").style.opacity = "1";
        document.querySelector(".icon-6x6").remove();
        document.querySelector(".num-4x4").remove();
        document.querySelector(".num-6x6").remove();
        if (players === "1") {
            document.querySelector(".stats").style.opacity = 1;
            document.querySelector("#multiplayer-2").remove();
            document.querySelector("#multiplayer-3").remove();
            document.querySelector("#multiplayer-4").remove();
            }
            else if(players === "2"){
            document.querySelector(".stats").remove();
            document.querySelector("#multiplayer-3").remove();
            document.querySelector("#multiplayer-4").remove();
            document.querySelector("#multiplayer-2").style.position = "relative";
            document.querySelector("#multiplayer-2").style.bottom = "40px";
            currentTurn2.style.visibility = "hidden";
            }
            else if(players === "3"){
                document.querySelector(".stats").remove();
                document.querySelector("#multiplayer-2").remove();
                document.querySelector("#multiplayer-4").remove();document.querySelector("#multiplayer-3").style.position = "relative";
                document.querySelector("#multiplayer-3").style.bottom = "44px";
                currentTurn02.style.visibility = "hidden";
                currentTurn03.style.visibility = "hidden";
                
                }
            else if(players === "4"){
            document.querySelector(".stats").remove();
            document.querySelector("#multiplayer-2").remove();
            document.querySelector("#multiplayer-3").remove();
            document.querySelector("#multiplayer-4").style.position = "relative";
            document.querySelector("#multiplayer-4").style.bottom = "44px";
            currentTurn002.style.visibility = "hidden";
            currentTurn003.style.visibility = "hidden";
            currentTurn004.style.visibility = "hidden";

            
            }
    } 
    else if ( theme === "Icons" && grid === "6x6"){
        document.getElementById("theme2").style.opacity = 1;
        document.querySelector(".icon-4x4").remove();
        document.querySelector(".num-4x4").remove();
        document.querySelector(".num-6x6").remove();
        if (players === "1") {
            document.querySelector(".stats").style.opacity = 1;
            document.querySelector("#multiplayer-2").remove();
            document.querySelector("#multiplayer-3").remove();
            document.querySelector("#multiplayer-4").remove();

            }
            else if(players === "2"){
                document.querySelector(".stats").remove();
                document.querySelector("#multiplayer-3").remove();
                document.querySelector("#multiplayer-4").remove();
                document.querySelector("#multiplayer-2").style.position = "relative";
                document.querySelector("#multiplayer-2").style.top = "8px";
                currentTurn2.style.visibility = "hidden";
            }
            else if(players === "3"){
                document.querySelector(".stats").remove();
                document.querySelector("#multiplayer-2").remove();
                document.querySelector("#multiplayer-4").remove();
                document.querySelector("#multiplayer-3").style.position = "relative";
                document.querySelector("#multiplayer-3").style.bottom = "-3px";
                currentTurn02.style.visibility = "hidden";
                currentTurn03.style.visibility = "hidden";
                

                }
            else if(players === "4"){
                document.querySelector(".stats").remove();
                document.querySelector("#multiplayer-2").remove();
                document.querySelector("#multiplayer-3").remove();
                document.querySelector("#multiplayer-4").style.position = "relative";
                document.querySelector("#multiplayer-4").style.bottom = "-5px";
                currentTurn002.style.visibility = "hidden";
                currentTurn003.style.visibility = "hidden";
                currentTurn004.style.visibility = "hidden";
                
            }
    } 
    else if ( theme === "Numbers" && grid === "4x4"){
        document.getElementById("theme3").style.opacity = 1;
        document.querySelector(".icon-4x4").remove();
        document.querySelector(".icon-6x6").remove();
        document.querySelector(".num-6x6").remove();
        if (players === "1") {
            document.querySelector(".stats").style.opacity = 1;
            document.querySelector("#multiplayer-2").remove();
            document.querySelector("#multiplayer-3").remove();
            document.querySelector("#multiplayer-4").remove();
            }
            else if(players === "2"){
                document.querySelector(".stats").remove();
                document.querySelector("#multiplayer-3").remove();
                document.querySelector("#multiplayer-4").remove();
                document.querySelector("#multiplayer-2").style.position = "relative";
                document.querySelector("#multiplayer-2").style.bottom = "24px";
                currentTurn2.style.visibility = "hidden";
            }
            else if(players === "3"){
                document.querySelector(".stats").remove();
                document.querySelector("#multiplayer-2").remove();
                document.querySelector("#multiplayer-4").remove();
                document.querySelector("#multiplayer-3").style.position = "relative";
                document.querySelector("#multiplayer-3").style.bottom = "28px";
                currentTurn02.style.visibility = "hidden";
                currentTurn03.style.visibility = "hidden";
                
                }
            else if(players === "4"){
                document.querySelector(".stats").remove();
                document.querySelector("#multiplayer-2").remove();
                document.querySelector("#multiplayer-3").remove();
                document.querySelector("#multiplayer-4").style.position = "relative";
                document.querySelector("#multiplayer-4").style.bottom = "30px";
                currentTurn002.style.visibility = "hidden";
                currentTurn003.style.visibility = "hidden";
                currentTurn004.style.visibility = "hidden";
                
            }
    } 
    else if ( theme === "Numbers" && grid === "6x6") {
        document.getElementById("theme4").style.opacity = 1;
        document.querySelector(".icon-4x4").remove();
        document.querySelector(".icon-6x6").remove();
        document.querySelector(".num-4x4").remove();
        if (players === "1") {
            document.querySelector(".stats").style.opacity = 1;
            document.querySelector("#multiplayer-2").remove();
            document.querySelector("#multiplayer-3").remove();
            document.querySelector("#multiplayer-4").remove();
            }
            else if(players === "2"){
                document.querySelector(".stats").remove();
                document.querySelector("#multiplayer-3").remove();
                document.querySelector("#multiplayer-4").remove();
                document.querySelector("#multiplayer-2").style.position = "relative";
                document.querySelector("#multiplayer-2").style.bottom = "-9px";
                currentTurn2.style.visibility = "hidden";
            }
            else if(players === "3"){
                document.querySelector(".stats").remove();
                document.querySelector("#multiplayer-2").remove();
                document.querySelector("#multiplayer-4").remove();
                document.querySelector("#multiplayer-3").style.position = "relative";
                document.querySelector("#multiplayer-3").style.bottom = "-4px";
                currentTurn02.style.visibility = "hidden";
                currentTurn03.style.visibility = "hidden";

                }
            else if(players === "4"){
                document.querySelector(".stats").remove();
                document.querySelector("#multiplayer-2").remove();
                document.querySelector("#multiplayer-3").remove();
                document.querySelector("#multiplayer-4").style.position = "relative";
                document.querySelector("#multiplayer-4").style.bottom = "-5px";
                currentTurn002.style.visibility = "hidden";
                currentTurn003.style.visibility = "hidden";
                currentTurn004.style.visibility = "hidden";
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
let popupDeclaration = document.getElementsByTagName("h3")[0];
let popupParagraph = document.querySelector(".popup-p");
let resultSummary = document.querySelector(".result-summary");
let soloMovesTaken = document.querySelector(".moves-taken");
let elapsedTime = document.querySelector(".time-elapsed");
let player1Result = document.querySelector(".player1-result");
let player2Result = document.querySelector(".player2-result");
let player3Result = document.querySelector(".player3-result");
let player4Result = document.querySelector(".player4-result");
let popupButton = document.querySelector(".popup-btn");
let header = document.querySelector("#header");
let menuBtn = document.querySelector("#menu-btn-popup");
let theme = document.querySelector("#theme");
let theme2 = document.querySelector("#theme2");
let theme3 = document.querySelector("#theme3");
let theme4 = document.querySelector("#theme4");
let stats = document.querySelector(".stats");
let mul2 = document.querySelector("#multiplayer-2");
let mul3 = document.querySelector("#multiplayer-3");
let mul4 = document.querySelector("#multiplayer-4");


// Function to display the results
const displayResults = () => {
    // Display results for solo player
    if(numberOfPlayersParameter === "1"){
        popup.style.visibility = "visible";
        popup.style.transform = "scale(1)";
        popup.style.background = "#F2F2F2";
        popup.style.top = "130px";
        // popup.body.style.userSelect = "all";
        header.style.filter = "blur(2px)";
        menuBtn.style.filter = "blur(2px)";
        theme.style.filter = "blur(2px)";
        theme2.style.filter = "blur(2px)";
        theme3.style.filter = "blur(2px)";
        theme4.style.filter = "blur(2px)";
        stats.style.filter = "blur(2px)";
        mul2.style.filter = "blur(2px)";
        mul3.style.filter = "blur(2px)";
        mul4.style.filter = "blur(2px)";
        // header.style.background = "rgba( 0, 0, 0.2)";
        document.body.style.userSelect = "none";
        document.querySelector("#desktop-tablet-restart-btn").style.pointerEvents = "none";
        document.querySelector("#desktop-tablet-new-game-btn").style.pointerEvents = "none";
        document.querySelector("#menu-btn").style.pointerEvents = "none";
        // document.head.style.filter = "blur(20px)";
        // document.style.backdropFilter = "blur(10px)";
        popup.style.backdropFilter = "blur(10px)";
        soloMovesTaken.innerHTML+=  soloMoves + " " + "Moves";
        soloMovesTaken.style.position = "relative";
        soloMovesTaken.style.bottom = "-60px"
        elapsedTime.style.position = "relative";
        elapsedTime.style.bottom = "-60px"
        elapsedTime.innerHTML += document.querySelector(".sec").innerHTML;
        player1Result.remove();
        player2Result.remove();
        player3Result.remove();
        player4Result.remove();
    }
    // Display results for 2 players
    else if(numberOfPlayersParameter === "2"){
        popup.style.visibility = "visible";
        popup.style.transform = "scale(1)";
        popup.style.top = "130px";
        header.style.filter = "blur(2px)";
        menuBtn.style.filter = "blur(2px)";
        theme.style.filter = "blur(2px)";
        theme2.style.filter = "blur(2px)";
        theme3.style.filter = "blur(2px)";
        theme4.style.filter = "blur(2px)";
        stats.style.filter = "blur(2px)";
        mul2.style.filter = "blur(2px)";
        mul3.style.filter = "blur(2px)";
        mul4.style.filter = "blur(2px)";
        document.querySelector("#desktop-tablet-restart-btn").style.pointerEvents = "none";
        document.querySelector("#desktop-tablet-new-game-btn").style.pointerEvents = "none";
        document.querySelector("#menu-btn").style.pointerEvents = "none";
        resultSummary.style.position = "relative";
        resultSummary.style.top = "60px";
        soloMovesTaken.remove();
        elapsedTime.remove();
        player3Result.remove();
        player4Result.remove();
    
        // Determining the winner
        if(batch1PlayerMoves[0] > batch1PlayerMoves[1]){
            // console.log("Player 1")
            popupDeclaration.innerHTML = "Player 1 Wins!"
            player1Result.innerHTML += " (Winner!)           " + batch1PlayerMoves[0] + " Pairs"
            player1Result.style.color = "#FCFCFC"
            player1Result.style.background = "#152938";
            player2Result.style.color = "#152938";
            player2Result.innerHTML += batch1PlayerMoves[1] + " Pairs"
            player1Result.style.fontWeight = "700";
            player2Result.style.fontWeight = "700";
            
        }
        else if(batch1PlayerMoves[0] < batch1PlayerMoves[1]){
            // console.log("player 2")
            popupDeclaration.innerHTML = "Player 2 Wins!"
            player2Result.innerHTML += " (Winner!)" + " "+ batch1PlayerMoves[1] + " Pairs"
            player2Result.style.color = "#FCFCFC"
            player2Result.style.background = "#152938";
            player1Result.style.color = "#152938";
            player1Result.innerHTML += batch1PlayerMoves[0] + " Pairs"
            player1Result.style.fontWeight = "700";
            player2Result.style.fontWeight = "700";
            
        }
        else{
        // console.log("Draw")
            popupDeclaration.innerHTML = "It's a tie!"
            player1Result.innerHTML += " (Winner!)" + " "+ batch1PlayerMoves[0] + " Pairs"
            player2Result.innerHTML += " (Winner!)" + " "+ batch1PlayerMoves[1] + " Pairs"
            player1Result.style.color = "#FCFCFC"
            player2Result.style.color = "#FCFCFC"
            player1Result.style.background = "#152938";
            player2Result.style.background = "#152938";player1Result.style.fontWeight = "700";
            player2Result.style.fontWeight = "700";
            

        }
    }
    // Displaying results for 3 players
    else if(numberOfPlayersParameter === "3"){
        popup.style.visibility = "visible";
        popup.style.height = "390px";
        popup.style.transform = "scale(1)";
        popup.style.top = "130px";
        header.style.filter = "blur(2px)";
        menuBtn.style.filter = "blur(2px)";
        theme.style.filter = "blur(2px)";
        theme2.style.filter = "blur(2px)";
        theme3.style.filter = "blur(2px)";
        theme4.style.filter = "blur(2px)";
        stats.style.filter = "blur(2px)";
        mul2.style.filter = "blur(2px)";
        mul3.style.filter = "blur(2px)";
        mul4.style.filter = "blur(2px)";
        // document.body.style.background = "rgba(0,0,0,0.6)";
        document.body.style.userSelect = "none";
        document.querySelector("#desktop-tablet-restart-btn").style.pointerEvents = "none";
        document.querySelector("#desktop-tablet-new-game-btn").style.pointerEvents = "none";
        document.querySelector("#menu-btn").style.pointerEvents = "none";
        popupDeclaration.style.position = "absolute";
        popupDeclaration.style.bottom = "55px";
        popupParagraph.style.position = "absolute";
        popupParagraph.style.bottom = "30px";
        resultSummary.style.position = "relative";
        resultSummary.style.bottom = "-55px";
        popupButton.style.position = "relative";
        popupButton.style.bottom = "-15px";
        player1Result.style.marginBottom = "13px"
        player2Result.style.marginBottom = "12px"
        soloMovesTaken.remove();
        elapsedTime.remove();
        player4Result.remove();

        // Determining the winner
        if(batch2PlayerMoves[0] > batch2PlayerMoves[1] && batch2PlayerMoves[0] > batch2PlayerMoves[2]){
            popupDeclaration.innerHTML = "Player 1 Wins!";
            player1Result.innerHTML += " (Winner!)" + " "+ batch2PlayerMoves[0] + " Pairs"
            player1Result.style.color = "#FCFCFC";
            player1Result.style.background = "#152938";
            player2Result.innerHTML += batch2PlayerMoves[1] + " Pairs"
            player3Result.innerHTML +=  batch2PlayerMoves[2] + " Pairs"
            player2Result.style.color = "#152938";
            player3Result.style.color = "#152938";
            player1Result.style.fontWeight = "700";
            player2Result.style.fontWeight = "700";
            player3Result.style.fontWeight = "700";
            
        }
        else if(batch2PlayerMoves[1] > batch2PlayerMoves[0] && batch2PlayerMoves[1] > batch2PlayerMoves[2]){
            popupDeclaration.innerHTML = "Player 2 Wins!";
            player2Result.innerHTML += " (Winner!)" + " "+ batch2PlayerMoves[1] + " Pairs"
            player2Result.style.color = "#FCFCFC"
            player2Result.style.background = "#152938";
            player1Result.innerHTML += batch2PlayerMoves[0] + " Pairs"
            player3Result.innerHTML +=  batch2PlayerMoves[2] + " Pairs"
            player1Result.style.color = "#152938";
            player3Result.style.color = "#152938";
            player1Result.style.fontWeight = "700";
            player2Result.style.fontWeight = "700";
            player3Result.style.fontWeight = "700";
            
        }
        else if(batch2PlayerMoves[2] > batch2PlayerMoves[0] && batch2PlayerMoves[2] > batch2PlayerMoves[1]){
            popupDeclaration.innerHTML = "Player 3 Wins!";
            player3Result.innerHTML += " (Winner!)" + " "+ batch2PlayerMoves[2] + " Pairs"
            player3Result.style.color = "#FCFCFC"
            player3Result.style.background = "#152938";
            player1Result.innerHTML += batch2PlayerMoves[0] + " Pairs"
            player2Result.innerHTML +=  batch2PlayerMoves[1] + " Pairs"
            player1Result.style.color = "#152938";
            player2Result.style.color = "#152938";
            player1Result.style.fontWeight = "700";
            player2Result.style.fontWeight = "700";
            player3Result.style.fontWeight = "700";
            
        }
        else if(batch2PlayerMoves[0] === batch2PlayerMoves[1] && batch2PlayerMoves[0] > batch2PlayerMoves[3]){
            popupDeclaration.innerHTML = "It's a tie!"
            player1Result.innerHTML += " (Winner!)" + " "+ batch2PlayerMoves[0] + " Pairs"
            player2Result.innerHTML += " (Winner!)" + " "+ batch2PlayerMoves[1] + " Pairs"
            player1Result.style.color = "#FCFCFC"
            player2Result.style.color = "#FCFCFC"
            player1Result.style.background = "#152938";
            player2Result.style.background = "#152938";
            player3Result.innerHTML += batch2PlayerMoves[2] + " Pairs"
            player1Result.style.fontWeight = "700";
            player2Result.style.fontWeight = "700";
            player3Result.style.fontWeight = "700";

        }
        else if(batch2PlayerMoves[0] === batch2PlayerMoves[2] && batch2PlayerMoves[0] > batch2PlayerMoves[1]){
            popupDeclaration.innerHTML = "It's a tie!"
            player1Result.innerHTML += " (Winner!)" + " "+ batch2PlayerMoves[0] + " Pairs"
            player3Result.innerHTML += " (Winner!)" + " "+ batch2PlayerMoves[2] + " Pairs"
            player1Result.style.color = "#FCFCFC"
            player3Result.style.color = "#FCFCFC"
            player1Result.style.background = "#152938";
            player3Result.style.background = "#152938";
            player2Result.innerHTML += batch2PlayerMoves[1] + " Pairs"
            player1Result.style.fontWeight = "700";
            player2Result.style.fontWeight = "700";
            player3Result.style.fontWeight = "700";

        }
        else if(batch2PlayerMoves[1] === batch2PlayerMoves[2] && batch2PlayerMoves[1] > batch2PlayerMoves[0]){
            popupDeclaration.innerHTML = "It's a tie!"
            player2Result.innerHTML += " (Winner!)" + " "+ batch2PlayerMoves[1] + " Pairs"
            player3Result.innerHTML += " (Winner!)" + " "+ batch2PlayerMoves[2] + " Pairs"
            player2Result.style.color = "#FCFCFC"
            player3Result.style.color = "#FCFCFC"
            player2Result.style.background = "#152938";
            player3Result.style.background = "#152938";
            player1Result.innerHTML += batch2PlayerMoves[0] + " Pairs"
            player1Result.style.fontWeight = "700";
            player2Result.style.fontWeight = "700";
            player3Result.style.fontWeight = "700";

        }
        else{
            popupDeclaration.innerHTML = "It's a tie!"
            player1Result.innerHTML += " (Winner!)" + " "+ batch2PlayerMoves[0] + " Pairs"
            player2Result.innerHTML += " (Winner!)" + " "+ batch2PlayerMoves[1] + " Pairs"
            player3Result.innerHTML += " (Winner!)" + " "+ batch2PlayerMoves[2] + " Pairs"
            player1Result.style.color = "#FCFCFC"
            player2Result.style.color = "#FCFCFC"
            player3Result.style.color = "#FCFCFC"
            player1Result.style.background = "#152938";
            player2Result.style.background = "#152938";
            player3Result.style.background = "#152938";
            player1Result.style.fontWeight = "700";
            player2Result.style.fontWeight = "700";
            player3Result.style.fontWeight = "700";

            
        }
    }
    // Display results for 4 players
    else {
        popup.style.visibility = "visible";
        popup.style.height = "440px";
        popup.style.transform = "scale(1)";
        popup.style.top = "75px";
        header.style.filter = "blur(2px)";
        menuBtn.style.filter = "blur(2px)";
        theme.style.filter = "blur(2px)";
        theme2.style.filter = "blur(2px)";
        theme3.style.filter = "blur(2px)";
        theme4.style.filter = "blur(2px)";
        stats.style.filter = "blur(2px)";
        mul2.style.filter = "blur(2px)";
        mul3.style.filter = "blur(2px)";
        mul4.style.filter = "blur(2px)";
        document.body.style.background = "rgba(0,0,0,0.6)";
        document.body.style.userSelect = "none";
        document.querySelector("#desktop-tablet-restart-btn").style.pointerEvents = "none";
        document.querySelector("#desktop-tablet-new-game-btn").style.pointerEvents = "none";
        document.querySelector("#menu-btn").style.pointerEvents = "none";
        popupDeclaration.style.position = "absolute";
        popupDeclaration.style.bottom = "105px";
        resultSummary.style.position = "relative";
        resultSummary.style.bottom = "-55px";
        popupParagraph.style.position = "absolute";
        popupParagraph.style.bottom = "80px";
        popupButton.style.position = "relative";
        popupButton.style.bottom = "-12px";
        player2Result.style.marginBottom = "11px"
        player3Result.style.marginBottom = "11px"
        soloMovesTaken.remove();
        elapsedTime.remove();

        // Determining the winner
        if (batch3PlayerMoves[0] > batch3PlayerMoves[1] && batch3PlayerMoves[0] > batch3PlayerMoves[2] && batch3PlayerMoves[0] > batch3PlayerMoves[3]){
            popupDeclaration.innerHTML = "Player 1 Wins!";
            player1Result.innerHTML += " (Winner!)" + " "+ batch3PlayerMoves[0] + " Pairs"
            player1Result.style.color = "#FCFCFC";
            player1Result.style.background = "#152938";
            player2Result.innerHTML += batch3PlayerMoves[1] + " Pairs"
            player3Result.innerHTML +=  batch3PlayerMoves[2] + " Pairs"
            player4Result.innerHTML +=  batch3PlayerMoves[3] + " Pairs"
            player2Result.style.color = "#152938";
            player3Result.style.color = "#152938";
            player4Result.style.color = "#152938";
            player1Result.style.fontWeight = "700";
            player2Result.style.fontWeight = "700";
            player3Result.style.fontWeight = "700";
            player4Result.style.fontWeight = "700";
        }
        else if (batch3PlayerMoves[1] > batch3PlayerMoves[0] && batch3PlayerMoves[1] > batch3PlayerMoves[2] && batch3PlayerMoves[1] > batch3PlayerMoves[3]){
            popupDeclaration.innerHTML = "Player 2 Wins!";
            player2Result.innerHTML += " (Winner!)" + " "+ batch3PlayerMoves[1] + " Pairs"
            player2Result.style.color = "#FCFCFC";
            player2Result.style.background = "#152938";
            player1Result.innerHTML += batch3PlayerMoves[0] + " Pairs"
            player3Result.innerHTML +=  batch3PlayerMoves[2] + " Pairs"
            player4Result.innerHTML +=  batch3PlayerMoves[3] + " Pairs"
            player1Result.style.color = "#152938";
            player3Result.style.color = "#152938";
            player4Result.style.color = "#152938";
            player1Result.style.fontWeight = "700";
            player2Result.style.fontWeight = "700";
            player3Result.style.fontWeight = "700";
            player4Result.style.fontWeight = "700";
        }
        else if (batch3PlayerMoves[2] > batch3PlayerMoves[0] && batch3PlayerMoves[2] > batch3PlayerMoves[1] && batch3PlayerMoves[2] > batch3PlayerMoves[3]){
            popupDeclaration.innerHTML = "Player 3 Wins!";
            player3Result.innerHTML += " (Winner!)" + " "+ batch3PlayerMoves[2] + " Pairs"
            player3Result.style.color = "#FCFCFC";
            player3Result.style.background = "#152938";
            player1Result.innerHTML += batch3PlayerMoves[0] + " Pairs"
            player2Result.innerHTML +=  batch3PlayerMoves[1] + " Pairs"
            player4Result.innerHTML +=  batch3PlayerMoves[3] + " Pairs"
            player1Result.style.color = "#152938";
            player2Result.style.color = "#152938";
            player4Result.style.color = "#152938";
            player1Result.style.fontWeight = "700";
            player2Result.style.fontWeight = "700";
            player3Result.style.fontWeight = "700";
            player4Result.style.fontWeight = "700";
        }
        else if (batch3PlayerMoves[3] > batch3PlayerMoves[0] && batch3PlayerMoves[3] > batch3PlayerMoves[1] && batch3PlayerMoves[3] > batch3PlayerMoves[2]){
            popupDeclaration.innerHTML = "Player 4 Wins!";
            player4Result.innerHTML += " (Winner!)" + " "+ batch3PlayerMoves[3] + " Pairs"
            player4Result.style.color = "#FCFCFC";
            player4Result.style.background = "#152938";
            player1Result.innerHTML += batch3PlayerMoves[0] + " Pairs"
            player2Result.innerHTML +=  batch3PlayerMoves[1] + " Pairs"
            player3Result.innerHTML +=  batch3PlayerMoves[2] + " Pairs"
            player1Result.style.color = "#152938";
            player2Result.style.color = "#152938";
            player3Result.style.color = "#152938";
            player1Result.style.fontWeight = "700";
            player2Result.style.fontWeight = "700";
            player3Result.style.fontWeight = "700";
            player4Result.style.fontWeight = "700";
        }
        else if (batch3PlayerMoves[0] === batch3PlayerMoves[1] && batch3PlayerMoves[0] > batch3PlayerMoves[2] && batch3PlayerMoves[0] > batch3PlayerMoves[3]){
            popupDeclaration.innerHTML = "It's a tie!";
            player1Result.innerHTML += " (Winner!)" + " "+ batch3PlayerMoves[0] + " Pairs";
            player2Result.innerHTML += " (Winner!)" + " "+ batch3PlayerMoves[1] + " Pairs";
            player3Result.innerHTML +=  batch3PlayerMoves[2] + " Pairs";
            player4Result.innerHTML +=  batch3PlayerMoves[3] + " Pairs";
            player1Result.style.color = "#FCFCFC";
            player2Result.style.color = "#FCFCFC";
            player1Result.style.background = "#152938";
            player2Result.style.background = "#152938";
            player3Result.style.color = "#152938";
            player4Result.style.color = "#152938";
            player1Result.style.fontWeight = "700";
            player2Result.style.fontWeight = "700";
            player3Result.style.fontWeight = "700";
            player4Result.style.fontWeight = "700";
        }
        else if (batch3PlayerMoves[0] === batch3PlayerMoves[2] && batch3PlayerMoves[0] > batch3PlayerMoves[1] && batch3PlayerMoves[0] > batch3PlayerMoves[3]){
            popupDeclaration.innerHTML = "It's a tie!";
            player1Result.innerHTML += " (Winner!)" + " "+ batch3PlayerMoves[0] + " Pairs";
            player3Result.innerHTML += " (Winner!)" + " "+ batch3PlayerMoves[2] + " Pairs";
            player2Result.innerHTML +=  batch3PlayerMoves[1] + " Pairs";
            player4Result.innerHTML +=  batch3PlayerMoves[3] + " Pairs";
            player1Result.style.color = "#FCFCFC";
            player3Result.style.color = "#FCFCFC";
            player1Result.style.background = "#152938";
            player3Result.style.background = "#152938";
            player2Result.style.color = "#152938";
            player4Result.style.color = "#152938";
            player1Result.style.fontWeight = "700";
            player2Result.style.fontWeight = "700";
            player3Result.style.fontWeight = "700";
            player4Result.style.fontWeight = "700";
        }
        else if (batch3PlayerMoves[0] === batch3PlayerMoves[3] && batch3PlayerMoves[0] > batch3PlayerMoves[1] && batch3PlayerMoves[0] > batch3PlayerMoves[2]){
            popupDeclaration.innerHTML = "It's a tie!";
            player1Result.innerHTML += " (Winner!)" + " "+ batch3PlayerMoves[0] + " Pairs";
            player4Result.innerHTML += " (Winner!)" + " "+ batch3PlayerMoves[3] + " Pairs";
            player2Result.innerHTML +=  batch3PlayerMoves[1] + " Pairs";
            player3Result.innerHTML +=  batch3PlayerMoves[2] + " Pairs";
            player1Result.style.color = "#FCFCFC";
            player4Result.style.color = "#FCFCFC";
            player1Result.style.background = "#152938";
            player4Result.style.background = "#152938";
            player2Result.style.color = "#152938";
            player3Result.style.color = "#152938";
            player1Result.style.fontWeight = "700";
            player2Result.style.fontWeight = "700";
            player3Result.style.fontWeight = "700";
            player4Result.style.fontWeight = "700";
        } 
        else if (batch3PlayerMoves[1] === batch3PlayerMoves[2] && batch3PlayerMoves[1] > batch3PlayerMoves[0] && batch3PlayerMoves[1] > batch3PlayerMoves[3]){
            popupDeclaration.innerHTML = "It's a tie!";
            player2Result.innerHTML += " (Winner!)" + " "+ batch3PlayerMoves[1] + " Pairs";
            player3Result.innerHTML += " (Winner!)" + " "+ batch3PlayerMoves[2] + " Pairs";
            player1Result.innerHTML +=  batch3PlayerMoves[0] + " Pairs";
            player4Result.innerHTML +=  batch3PlayerMoves[3] + " Pairs";
            player2Result.style.color = "#FCFCFC";
            player3Result.style.color = "#FCFCFC";
            player2Result.style.background = "#152938";
            player3Result.style.background = "#152938";
            player1Result.style.color = "#152938";
            player4Result.style.color = "#152938";
            player1Result.style.fontWeight = "700";
            player2Result.style.fontWeight = "700";
            player3Result.style.fontWeight = "700";
            player4Result.style.fontWeight = "700";
        }
        else if (batch3PlayerMoves[1] === batch3PlayerMoves[3] && batch3PlayerMoves[1] > batch3PlayerMoves[0] && batch3PlayerMoves[1] > batch3PlayerMoves[2]){
            popupDeclaration.innerHTML = "It's a tie!";
            player2Result.innerHTML += " (Winner!)" + " "+ batch3PlayerMoves[1] + " Pairs";
            player4Result.innerHTML += " (Winner!)" + " "+ batch3PlayerMoves[3] + " Pairs";
            player1Result.innerHTML +=  batch3PlayerMoves[0] + " Pairs";
            player3Result.innerHTML +=  batch3PlayerMoves[2] + " Pairs";
            player2Result.style.color = "#FCFCFC";
            player4Result.style.color = "#FCFCFC";
            player2Result.style.background = "#152938";
            player4Result.style.background = "#152938";
            player1Result.style.color = "#152938";
            player3Result.style.color = "#152938";
            player1Result.style.fontWeight = "700";
            player2Result.style.fontWeight = "700";
            player3Result.style.fontWeight = "700";
            player4Result.style.fontWeight = "700";
        }
        else if (batch3PlayerMoves[2] === batch3PlayerMoves[3] && batch3PlayerMoves[2] > batch3PlayerMoves[0] && batch3PlayerMoves[2] > batch3PlayerMoves[1]){
            popupDeclaration.innerHTML = "It's a tie!";
            player3Result.innerHTML += " (Winner!)" + " "+ batch3PlayerMoves[2] + " Pairs";
            player4Result.innerHTML += " (Winner!)" + " "+ batch3PlayerMoves[3] + " Pairs";
            player1Result.innerHTML +=  batch3PlayerMoves[0] + " Pairs";
            player2Result.innerHTML +=  batch3PlayerMoves[1] + " Pairs";
            player3Result.style.color = "#FCFCFC";
            player4Result.style.color = "#FCFCFC";
            player3Result.style.background = "#152938";
            player4Result.style.background = "#152938";
            player1Result.style.color = "#152938";
            player2Result.style.color = "#152938";
            player1Result.style.fontWeight = "700";
            player2Result.style.fontWeight = "700";
            player3Result.style.fontWeight = "700";
            player4Result.style.fontWeight = "700";
        }
        else if (batch3PlayerMoves[0] === batch3PlayerMoves[1] && batch3PlayerMoves[0] === batch3PlayerMoves[2] && batch3PlayerMoves[0] > batch3PlayerMoves[3]){
            popupDeclaration.innerHTML = "It's a tie!";
            player1Result.innerHTML += " (Winner!)" + " "+ batch3PlayerMoves[0] + " Pairs";
            player2Result.innerHTML += " (Winner!)" + " "+ batch3PlayerMoves[1] + " Pairs";
            player3Result.innerHTML += " (Winner!)" + " "+ batch3PlayerMoves[2] + " Pairs";
            player4Result.innerHTML +=  batch3PlayerMoves[3] + " Pairs";
            player1Result.style.color = "#FCFCFC";
            player2Result.style.color = "#FCFCFC";
            player3Result.style.color = "#FCFCFC";
            player1Result.style.background = "#152938";
            player2Result.style.background = "#152938";
            player3Result.style.background = "#152938";
            player4Result.style.color = "#152938";
            player1Result.style.fontWeight = "700";
            player2Result.style.fontWeight = "700";
            player3Result.style.fontWeight = "700";
            player4Result.style.fontWeight = "700";
        }
        else if (batch3PlayerMoves[0] === batch3PlayerMoves[1] && batch3PlayerMoves[0] === batch3PlayerMoves[3] && batch3PlayerMoves[0] > batch3PlayerMoves[2]){
            popupDeclaration.innerHTML = "It's a tie!";
            player1Result.innerHTML += " (Winner!)" + " "+ batch3PlayerMoves[0] + " Pairs";
            player2Result.innerHTML += " (Winner!)" + " "+ batch3PlayerMoves[1] + " Pairs";
            player4Result.innerHTML += " (Winner!)" + " "+ batch3PlayerMoves[3] + " Pairs";
            player3Result.innerHTML +=  batch3PlayerMoves[2] + " Pairs";
            player1Result.style.color = "#FCFCFC";
            player2Result.style.color = "#FCFCFC";
            player4Result.style.color = "#FCFCFC";
            player1Result.style.background = "#152938";
            player2Result.style.background = "#152938";
            player4Result.style.background = "#152938";
            player3Result.style.color = "#152938";
            player1Result.style.fontWeight = "700";
            player2Result.style.fontWeight = "700";
            player3Result.style.fontWeight = "700";
            player4Result.style.fontWeight = "700";
        }
        else if (batch3PlayerMoves[0] === batch3PlayerMoves[2] && batch3PlayerMoves[0] === batch3PlayerMoves[3] && batch3PlayerMoves[0] > batch3PlayerMoves[1]){
            popupDeclaration.innerHTML = "It's a tie!";
            player1Result.innerHTML += " (Winner!)" + " "+ batch3PlayerMoves[0] + " Pairs";
            player3Result.innerHTML += " (Winner!)" + " "+ batch3PlayerMoves[2] + " Pairs";
            player4Result.innerHTML += " (Winner!)" + " "+ batch3PlayerMoves[3] + " Pairs";
            player2Result.innerHTML +=  batch3PlayerMoves[1] + " Pairs";
            player1Result.style.color = "#FCFCFC";
            player3Result.style.color = "#FCFCFC";
            player4Result.style.color = "#FCFCFC";
            player1Result.style.background = "#152938";
            player3Result.style.background = "#152938";
            player4Result.style.background = "#152938";
            player2Result.style.color = "#152938";
            player1Result.style.fontWeight = "700";
            player2Result.style.fontWeight = "700";
            player3Result.style.fontWeight = "700";
            player4Result.style.fontWeight = "700";
        }
        else if (batch3PlayerMoves[1] === batch3PlayerMoves[2] && batch3PlayerMoves[1] === batch3PlayerMoves[3] && batch3PlayerMoves[1] > batch3PlayerMoves[0]){
            popupDeclaration.innerHTML = "It's a tie!";
            player2Result.innerHTML += " (Winner!)" + " "+ batch3PlayerMoves[1] + " Pairs";
            player3Result.innerHTML += " (Winner!)" + " "+ batch3PlayerMoves[2] + " Pairs";
            player4Result.innerHTML += " (Winner!)" + " "+ batch3PlayerMoves[3] + " Pairs";
            player1Result.innerHTML +=  batch3PlayerMoves[0] + " Pairs";
            player2Result.style.color = "#FCFCFC";
            player3Result.style.color = "#FCFCFC";
            player4Result.style.color = "#FCFCFC";
            player2Result.style.background = "#152938";
            player3Result.style.background = "#152938";
            player4Result.style.background = "#152938";
            player1Result.style.color = "#152938";
            player1Result.style.fontWeight = "700";
            player2Result.style.fontWeight = "700";
            player3Result.style.fontWeight = "700";
            player4Result.style.fontWeight = "700";
        }
        else if (batch3PlayerMoves[2] === batch3PlayerMoves[3] && batch3PlayerMoves[2] === batch3PlayerMoves[0] && batch3PlayerMoves[2] > batch3PlayerMoves[1]){
            popupDeclaration.innerHTML = "It's a tie!";
            player3Result.innerHTML += " (Winner!)" + " "+ batch3PlayerMoves[2] + " Pairs";
            player4Result.innerHTML += " (Winner!)" + " "+ batch3PlayerMoves[3] + " Pairs";
            player1Result.innerHTML += " (Winner!)" + " "+ batch3PlayerMoves[0] + " Pairs";
            player2Result.innerHTML +=  batch3PlayerMoves[1] + " Pairs";
            player3Result.style.color = "#FCFCFC";
            player4Result.style.color = "#FCFCFC";
            player1Result.style.color = "#FCFCFC";
            player3Result.style.background = "#152938";
            player4Result.style.background = "#152938";
            player1Result.style.background = "#152938";
            player2Result.style.color = "#152938";
            player1Result.style.fontWeight = "700";
            player2Result.style.fontWeight = "700";
            player3Result.style.fontWeight = "700";
            player4Result.style.fontWeight = "700";
        }
        else{
            popupDeclaration.innerHTML = "It's a tie!";
            player1Result.innerHTML += " (Winner!)" + " "+ batch3PlayerMoves[0] + " Pairs";
            player2Result.innerHTML += " (Winner!)" + " "+ batch3PlayerMoves[1] + " Pairs";
            player3Result.innerHTML += " (Winner!)" + " "+ batch3PlayerMoves[2] + " Pairs";
            player4Result.innerHTML += " (Winner!)" + " "+ batch3PlayerMoves[3] + " Pairs";
            player1Result.style.color = "#FCFCFC";
            player2Result.style.color = "#FCFCFC";
            player3Result.style.color = "#FCFCFC";
            player4Result.style.color = "#FCFCFC";
            player1Result.style.background = "#152938";
            player2Result.style.background = "#152938";
            player3Result.style.background = "#152938";
            player4Result.style.background = "#152938";
            player1Result.style.fontWeight = "700";
            player2Result.style.fontWeight = "700";
            player3Result.style.fontWeight = "700";
            player4Result.style.fontWeight = "700";
        }
    }
    
    
}

// The function for the game's logic
const logicFunction = (a) => {
    const icons = document.querySelectorAll(a);
    icons.forEach((icon) => {
        icon.onclick = function(){
            icon.classList.add("clicked");
            
            // Calling the timer function
        if (numberOfPlayersParameter === "1" && runTimerOnce === 0){
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

            // Selecting active player elements for 2 players
            let player1 = document.querySelector(".player-1");
            let player2 = document.querySelector(".player-2");

            // Selecting active players for 3 players
            let player01 = document.querySelector(".player-01");
            let player02 = document.querySelector(".player-02");
            let player03 = document.querySelector(".player-03");

            // Selecting active players for 4 players
            let player001 = document.querySelector(".player-001");
            let player002 = document.querySelector(".player-002");
            let player003 = document.querySelector(".player-003");
            let player004 = document.querySelector(".player-004");
            


            if(firstSelection === secondSelection){
                const correctIcons = document.querySelectorAll(".icon[icon='" + firstSelection + "']");

                // Switching the active player in Multiplayer 2
                if(numberOfPlayersParameter === "2"){
                    batch1PlayerMoves[batch1ActivePlayer]++;
                    document.querySelector(`.p${batch1Index[batch1ActivePlayer]}-moves`).innerHTML = batch1PlayerMoves[batch1ActivePlayer];
                }

                // Switching the active player in Multiplayer 3
                if(numberOfPlayersParameter === "3"){
                    batch2PlayerMoves[batch2ActivePlayer]++;
                    document.querySelector(`.p0${batch2Index[batch2ActivePlayer]}-moves`).innerHTML = batch2PlayerMoves[batch2ActivePlayer];
                }
                
                // Switching the active player in Multiplayer 4
                if(numberOfPlayersParameter === "4"){
                    batch3PlayerMoves[batch3ActivePlayer]++;
                    document.querySelector(`.p00${batch3Index[batch3ActivePlayer]}-moves`).innerHTML = batch3PlayerMoves[batch3ActivePlayer];
                    
                }

                correctIcons[0].classList.add("correct");
                correctIcons[0].classList.remove("clicked");
                correctIcons[1].classList.add("correct");
                correctIcons[1].classList.remove("clicked");
                // console.log(correctIcons[0])

                // Increasing the moves made by a solo player
                if(icons && correctIcons[0] && numberOfPlayersParameter === "1"){
                    soloMoves++;
                }
                // Determines the moves made by a solo player and gives results
                if (correctIcons[1] && numberOfPlayersParameter === "1"){
                    soloPairs++;
                    document.querySelector(".mov").innerHTML = soloMoves;
                    if(soloPairs === 8 && gridSizeParameter === "4x4"){
                        displayResults();
                        stopTimer();
                    }
                    else if (soloPairs === 18 && gridSizeParameter === "6x6"){
                        displayResults();
                        stopTimer();
                    }
                }
                // Increasing the moves made by 2 Players and displaying the results
                if(numberOfPlayersParameter === "2"){
                    soloPairs++;
                    if(soloPairs === 8 && gridSizeParameter === "4x4"){
                        displayResults();
                
                    }
                    else if (soloPairs === 18 && gridSizeParameter === "6x6"){
                        // console.log("well done");
                        displayResults();
                    }
                }
                // Display results for 3 players
                if(numberOfPlayersParameter === "3"){
                    soloPairs++;
                    if(soloPairs === 8 && gridSizeParameter === "4x4"){
                        displayResults();
                    }
                    else if (soloPairs === 18 && gridSizeParameter === "6x6"){
                        displayResults();
                    }
                }

                 // Display results for 4 players
                if(numberOfPlayersParameter === "4"){
                    soloPairs++;
                    if(soloPairs === 8 && gridSizeParameter === "4x4"){
                        displayResults();
                    }
                    else if (soloPairs === 18 && gridSizeParameter === "6x6"){
                        displayResults();
                    }
                }


            } else {
                
                const incorrectIcons = document.querySelectorAll(".icon.clicked");

                // Switching the active player in Multiplayer 2
                if(numberOfPlayersParameter === "2"){
                    batch1ActivePlayer = (batch1ActivePlayer === 0) ? 1 : 0;
                    // Visual toggling the active players
                    if (batch1ActivePlayer === 1){
                        player1.classList.toggle("player-active");
                        player2.classList.toggle("player-active");
                        currentTurn2.style.visibility = "visible";
                        currentTurn1.style.visibility = "hidden";
                    }
                    else{
                        player2.classList.toggle("player-active");
                        player1.classList.toggle("player-active");
                        currentTurn1.style.visibility = "visible";
                        currentTurn2.style.visibility = "hidden";
                    }
                    
                }
                
                // Switching the active player in Multiplayer 3
                if(numberOfPlayersParameter === "3"){
                    batch2ActivePlayer = (batch2ActivePlayer === 0) ? 1 : (batch2ActivePlayer === 1) ? 2 : 0;
                    // Visual toggling the active players
                    if(batch2ActivePlayer === 1){
                        player01.classList.toggle("player-active-1");
                        player02.classList.toggle("player-active-1");
                        currentTurn01.style.visibility = "hidden";
                        currentTurn02.style.visibility = "visible";
                    }
                    else if(batch2ActivePlayer === 2){
                    player02.classList.toggle("player-active-1");
                    player03.classList.toggle("player-active-1");
                    currentTurn02.style.visibility = "hidden";
                    currentTurn03.style.visibility = "visible";
                    }
                    else if(batch2ActivePlayer === 0){
                        player03.classList.toggle("player-active-1");
                        player01.classList.toggle("player-active-1");
                        currentTurn01.style.visibility = "visible";
                        currentTurn03.style.visibility = "hidden";
                    }
                }

                 // Switching the active player in Multiplayer 4
                if(numberOfPlayersParameter === "4"){
                    batch3ActivePlayer = (batch3ActivePlayer === 0) ? 1 : (batch3ActivePlayer === 1) ? 2 : (batch3ActivePlayer === 2) ? 3 : 0;

                    // Visual toggling the active players
                    if(batch3ActivePlayer === 1){
                        player001.classList.toggle("player-active-11");
                        player002.classList.toggle("player-active-11");
                        currentTurn001.style.visibility = "hidden";
                        currentTurn002.style.visibility = "visible";
                        
                    }
                    else if(batch3ActivePlayer === 2){
                    player002.classList.toggle("player-active-11");
                    player003.classList.toggle("player-active-11");
                    currentTurn002.style.visibility = "hidden";
                    currentTurn003.style.visibility = "visible";
                    
                    }
                    else if(batch3ActivePlayer === 3){
                        player003.classList.toggle("player-active-11");
                        player004.classList.toggle("player-active-11");
                    currentTurn003.style.visibility = "hidden";
                    currentTurn004.style.visibility = "visible";
                    }
                    else {
                        player004.classList.toggle("player-active-11");
                        player001.classList.toggle("player-active-11");
                        currentTurn001.style.visibility = "visible";
                        currentTurn004.style.visibility = "hidden";

                    }
                }



                
                incorrectIcons[0].classList.add("incorrect");
                incorrectIcons[1].classList.add("incorrect");


                if(icons && incorrectIcons[0] && numberOfPlayersParameter === "1"){
                    soloMoves++;
                    document.querySelector(".mov").innerHTML = soloMoves;
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

// Restarting the game
let restartGameEnd = document.querySelector("#restart-btn");
let restartGameMenu = document.getElementById("menu-restart-btn");
let desktopTabletRestartBtn = document.querySelector("#desktop-tablet-restart-btn");

const restartGameFunc = () => {
    const parameterObj = {
        theme: themeParameter,
        numberOfPlayers: numberOfPlayersParameter,
        gridSize: gridSizeParameter
    }
    let searchParams = new URLSearchParams(parameterObj);
    let queryString = searchParams.toString();
    window.location.href = './game.html?' + queryString;
}
restartGameEnd.addEventListener("click", restartGameFunc);
restartGameMenu.addEventListener("click", restartGameFunc);
desktopTabletRestartBtn.addEventListener("click", restartGameFunc);


// Setting up new a game
let setUpNewGameEnd = document.querySelector("#setup-new-game-btn");
let setUpNewGameMenu = document.getElementById("menu-new-game-btn");
let desktopTabletNewGameBtn = document.querySelector("#desktop-tablet-new-game-btn")

const setUpNewGameFunc = () => {
    window.location.href = './index.html';
}
setUpNewGameEnd.addEventListener("click", setUpNewGameFunc);
setUpNewGameMenu.addEventListener("click", setUpNewGameFunc);
desktopTabletNewGameBtn.addEventListener("click", setUpNewGameFunc);

// Resuming the game
let resumeGame = document.getElementById("menu-resume-game-btn");
const resumeGameFunc = () => {
    document.body.style.background = "";
    menuPopup.style.visibility = "hidden";
    menuPopup.style.transform = "scale(0.1)";
    menuPopup.style.top = "-90px";

}
resumeGame.addEventListener("click",resumeGameFunc);