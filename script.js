// Adding functionality to the Select-Theme buttons
let selectTheme = 'Numbers';
let themeBtn1 = document.querySelector('.theme-btn-1');
let themeBtn2 = document.querySelector('.theme-btn-2');

const themeButton1 = () => {
    selectTheme = themeBtn1.innerHTML;
    themeBtn1.style.backgroundColor = '#152938'
    themeBtn2.style.backgroundColor = '#BCCED9'
    // console.log(selectTheme);
}
const themeButton2 = () => {
    selectTheme = themeBtn2.innerHTML;
    themeBtn2.style.backgroundColor = '#152938'
    themeBtn1.style.backgroundColor = '#BCCED9'
    // console.log(selectTheme);
}
themeBtn1.onclick = themeButton1;
themeBtn2.onclick = themeButton2;

// Adding functionality to the Number-of-Players buttons
let selectPlayers = 1;
let numBtn1 = document.querySelector('.number-btn-1');
let numBtn2 = document.querySelector('.number-btn-2');
let numBtn3 = document.querySelector('.number-btn-3');
let numBtn4 = document.querySelector('.number-btn-4');

const numberButton1 = () => {
    selectPlayers = numBtn1.innerHTML;
    numBtn1.style.backgroundColor = '#152938'
    numBtn2.style.backgroundColor = '#BCCED9'
    numBtn3.style.backgroundColor = '#BCCED9'
    numBtn4.style.backgroundColor = '#BCCED9'
    // console.log(selectPlayers);
}
const numberButton2 = () => {
    selectPlayers = numBtn2.innerHTML;
    numBtn2.style.backgroundColor = '#152938'
    numBtn1.style.backgroundColor = '#BCCED9'
    numBtn3.style.backgroundColor = '#BCCED9'
    numBtn4.style.backgroundColor = '#BCCED9'
    // console.log(selectPlayers);
}
const numberButton3 = () => {
    selectPlayers = numBtn3.innerHTML;
    numBtn3.style.backgroundColor = '#152938'
    numBtn1.style.backgroundColor = '#BCCED9'
    numBtn2.style.backgroundColor = '#BCCED9'
    numBtn4.style.backgroundColor = '#BCCED9'
    // console.log(selectPlayers);
}
const numberButton4 = () => {
    selectPlayers = numBtn4.innerHTML;
    numBtn4.style.backgroundColor = '#152938'
    numBtn1.style.backgroundColor = '#BCCED9'
    numBtn2.style.backgroundColor = '#BCCED9'
    numBtn3.style.backgroundColor = '#BCCED9'
    // console.log(selectPlayers);
}
numBtn1.onclick = numberButton1
numBtn2.onclick = numberButton2
numBtn3.onclick = numberButton3
numBtn4.onclick = numberButton4

// Adding functionality to the Grid-Size buttons
let selectGrid = '4x4';
let gridBtn1 = document.querySelector('.grid-btn-1');
let gridBtn2 = document.querySelector('.grid-btn-2');

const gridSizeButton1 = () => {
    selectGrid = gridBtn1.innerHTML;
    gridBtn1.style.backgroundColor = '#152938'
    gridBtn2.style.backgroundColor = '#BCCED9'
    // console.log(selectGrid)
}
const gridSizeButton2 = () => {
    selectGrid = gridBtn2.innerHTML;
    gridBtn2.style.backgroundColor = '#152938'
    gridBtn1.style.backgroundColor = '#BCCED9'
    // console.log(selectGrid)
}
gridBtn1.onclick = gridSizeButton1;
gridBtn2.onclick = gridSizeButton2;


// Adding functionality to the Start-Game button
let startTheGame = document.getElementById('start-game-btn');
const startGame = () => {
    const parameterObj = {
        theme: selectTheme,
        numberOfPlayers: selectPlayers,
        gridSize: selectGrid
    }
    let searchParams = new URLSearchParams(parameterObj);
    let queryString = searchParams.toString();
    window.location.href = './game.html?' + queryString;

}
startTheGame.onclick = startGame;