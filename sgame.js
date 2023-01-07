console.log(window.location)
let keyValue = window.location.search;
console.log(keyValue)

let params = new URLSearchParams(keyValue)
let themes = params.get('theme')
let players = params.get('numberOfPlayers')
let game = params.get('gridSize')
console.log('Theme selection: '+ themes)
console.log('Number of players: '+ players)
console.log('grid size: ' + game)