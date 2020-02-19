//Get Our Elements

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

//Build out functions

function togglePlay() {
    //paused is a property that lives on the video, there is no playing property, only paused.
    // if (video.paused) {
    //     video.play();
    // } else {
    //     video.pause();
    // }

    //or

    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function skip() {
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

//Hook up the event listeners

video.addEventListener('click', togglePlay);

//listen for the video to pause. so, whatever causes it to pause, then we can just update the buttons.
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);

//listen for a click on anything that has a "data-skip"
skipButtons.forEach(button => button.addEventListener('click', skip));

//listen for a change event on the range sliders
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

video.addEventListener('timeupdate', handleProgress);

//Is the person currently clicking, or has their mouse down? No.
let mousedown = false;
progress.addEventListener('click', scrub);
//progress.addEventListener('mousemove', scrub);

// progress.addEventListener('mousemove', () => {
//     if(mousedown){
//         scrub();
//     }
// });

//When someone moves their mouse, we say "mousedown && scrub", and what this does is it first checks the 'mousedown' variable.
//If this variable is "true", it moves on to scrub(e). If this variable is "false", it's just going to return "false" and it's not going to do anything.
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));

//when someone mouses down, we'll set it to "true".
progress.addEventListener('mousedown', () => mousedown = true);
// when someone mouses up, we will make the mousedown equal to "false"
progress.addEventListener('mouseup', () => mousedown = false);