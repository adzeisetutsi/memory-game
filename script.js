// Adding functionality to the Start-Game button
let startTheGame = document.getElementById('start-game-btn');
const startGame = () => {
    document.querySelector('.grid-size').innerHTML = "It's Turbo";
} 
startTheGame.addEventListener('click', startGame);