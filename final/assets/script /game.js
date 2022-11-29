let score = 0;
let scoreBoard = document.getElementById("score");
let bees = document.getElementById("bee");



bees.onclick =function(){
    score++;
    scoreBoard.innerHTML = score;
}

let bee2 = document.getElementById("rightbee");

bee2.onclick =function(){
    score++;
    scoreBoard.innerHTML = score;
}

function startGame(){
    let game = document.getElementById("game");
    game.style.display = "Block";
    let intro = document.getElementById("intro");
    intro.style.display = "none";
}