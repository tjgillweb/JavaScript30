//const timeNodes = [...document.querySelectorAll('[data-time]')]; //spread operator
//or use array.from
const timeNodes = Array.from(document.querySelectorAll('[data-time]')); //anything with data-time attribute on it
const totalTime = document.querySelector('.totalTime');

// make an array of strings from an array of list items
const seconds = timeNodes.map(node => node.dataset.time).map(timeCode => {
    const [mins, secs] = timeCode.split(":").map(parseFloat);
    return (mins * 60) + secs;
    //console.log(mins, secs);
}).reduce((total, vidSeconds) => total + vidSeconds);
//console.log(seconds);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;
console.log(hours, mins, secondsLeft);

totalTime.innerHTML = `<span>Total time <b>${hours}</b>:<b>${mins}</b>:<b>${secondsLeft}</span>`;