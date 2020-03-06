const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp;
let score = 0;

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    //console.log(holes.length); //returns 6 because holes is a NodeList which contains all 6 holes
    const idx = Math.floor(Math.random() * holes.length); //find a random index between 0 and 5
    const hole = holes[idx];
    //console.log(hole);

    // if it was the same one that popped up last time
    if (hole === lastHole) {
        console.log("Thats the same one bud");
        return randomHole(holes); //run the function again (recursion)
    }
    lastHole = hole; //reference to which one got popped up last time the function was called
    return hole;
}

function peep() {
    const time = randomTime(200, 1000); //between 200 milliseconds and 1 second
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) peep(); //unless the game is over we just need to run it again.
    }, time);
}

function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    // run the game for 10 seconds
    setTimeout(() => timeUp = true, 10000);
}

function bonk(e) {
    if (!e.isTrusted) return; //fake click - cheater!!
    score++;
    this.classList.remove('up');
    scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bonk));