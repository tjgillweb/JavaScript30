const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');

speed.addEventListener('mousemove', function (e) {
    //shows how far we are, 0 at the top and 410px at the bottom
    const y = e.pageY - this.offsetTop; //Because we can't assume that this bar is going to be at the top of the screen.

    //convert the pixels to percent, if its 205px, then it should be 50%
    const percent = y / this.offsetHeight;
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent * 100) + "%"; //height of the bar as we scroll up and down

    // at 0% height it should be 0.4x, and at 100% height it should be 4x
    const playbackRate = percent * (max - min) + min;
    bar.style.height = height;

    bar.textContent = playbackRate.toFixed(2) + 'x';
    video.playbackRate = playbackRate;
})