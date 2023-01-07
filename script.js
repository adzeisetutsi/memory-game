// Adding functionality to the Start-Game button
let startTheGame = document.getElementById('start-game-btn');
const startGame = () => {
    window.location.href ='./game.html';
} 
startTheGame.addEventListener('click', startGame);