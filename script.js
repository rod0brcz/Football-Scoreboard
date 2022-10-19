let hScore = document.getElementById('h-score')
let gScore = document.getElementById('g-score')
let hCount = 0
let gCount = 0

function hTouchdown(){
    hCount = hCount + 6
    hScore.textContent = hCount
}

function hExtra(){
    hCount = hCount + 1
    hScore.textContent = hCount
}

function hFieldgoal(){
    hCount = hCount + 3
    hScore.textContent = hCount
}

function h2point(){
    hCount = hCount + 2
    hScore.textContent = hCount
}

function gTouchdown(){
    gCount = gCount + 6
    gScore.textContent = gCount
}

function gExtra(){
    gCount = gCount + 1
    gScore.textContent = gCount
}

function gFieldgoal(){
    gCount = gCount + 3
    gScore.textContent = gCount
}

function g2point(){
    gCount = gCount + 2
    gScore.textContent = gCount
}

function newGame(){
    hCount = 0
    gCount = 0
    hScore.textContent = hCount
    gScore.textContent = gCount
}