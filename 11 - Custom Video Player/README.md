# 11 - Custom Video Player

**Challenge:** 
Build a totally custom interface where we will hide the controls and build our own interface with
- a video scrubber,
- a button to pause and play the video,
- a slider volume button,
- slider to increase/decrese the video speed, 
- skip buttons that allow you to skip forward 25s or get back 10s, and 
- when we click the video it will pause.

**Things To Learn:** Click, mousemove, change, play, pause, timeupdate events. `video.paused`, `video.currentTime`,`video.duration` and  dataset 

**Demo:**[here](https://tjgillweb.github.io/JavaScript30/11%20-%20Custom%20Video%20Player/).

![](images/custom-video-player-screenshot.gif)

So, lets begin!

### Get Our Elements
```Javascript
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelector('[data-skip]');
const ranges = player.querySelector('.player__slider');
```

### Build out functions

- `togglePlay()`: used to play/pause the video when we click on the play/pause toggle button or click on the video.
```Javascript
function togglePlay(){
//paused is a property that lives on the video, there is no playing property, only paused.
if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}
```
Another way of doing the togglePlay() function instead of if/else is:
```Javascript
function togglePlay(){
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}
```

- `updateButton()` : Used to update the icon of the play/pause toggle button. Display the play button when the video is paused, and pause button when the video is played.
```Javascript
function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}
```

- `skip()`
The way we define how much the video is going to be skipped is by defining the "data-skip" attribute on the buttons. We can put a "data-skip" on absolutely any element.
```HTML
<button data-skip="-10" class="player__button">« 10s</button>
<button data-skip="25" class="player__button">25s »</button>
```
```Javascript
function skip() {
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}
```

- `handleRangeUpdate()`
```Javascript
function handleRangeUpdate(){
//property you want to update is called "this.name", which is either 'volume' or 'playbackRate'
    video[this.name] = this.value;
}
```

- `handleProgress()`
  - First of all, when you play the video, the progress bar should be updating in real-time. 
  - Second of all, when you click on it and drag, it should update the video to correspond with that lace
  - We're just going to be updating the `flex-basis` value, sort of like updating the width, of the progress bar. 
  - It's just going to correspond with how long it is. So if we have 0% being not started at all, 100% being totally finished. 

```Javascript
function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}
```
  - But the progress bar doesn't work just yet, and why not? It's because we've created the progress, but we want it to run every so often so that it should update itself.
  - What we'll do is, again, we will listen for the video to emit an event called "timeupdate", and when that happens we will run "handleProgress".
  - There is also an event called 'progress'. "progress" and "timeupdate" will just trigger when the video is updating its timecode, and then if it's paused it's not going to be unnecessarily running that function. 

```Javascript
video.addEventListener('timeupdate', handleProgress);
```
- `scrub()`
```Javascript
function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}
```
- So if it's a 60-second clip, you're halfway through, it's going to tell us that you should scrub to 30 seconds. Then, we simply just update the video,
```Javascript
//listen for the scrub function on the click event.
progress.addEventListener('click', scrub);
```
- Now, let's work on the actual dragging and dropping of it.
```Javascript
//listen for the scrub function on the mousemove event.
progress.addEventListener('mousemove', scrub);
```
But this doesn't work nicely, the video jerks.
So, we need to create a flag variable, set it to "false", and then when we clicked it, we set it to "true".
```Javascript
//Is the person currently clicking, or has their mouse down? No.
let mousedown = false;
progress.addEventListener('mousemove', () => {
    if(mousedown){
        scrub();
    }
});

//when someone mouses down, we'll set it to "true".
progress.addEventListener('mousedown', () => mousedown = true);
// when someone mouses up, we will make the mousedown equal to "false"
progress.addEventListener('mouseup', () => mousedown = false);
```
```Javascript
//another way of writing the above statement
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
//When someone moves their mouse, we say "mousedown && scrub", and what this does is it first checks the 'mousedown' variable.
//If this variable is "true", it moves on to scrub(e). If this variable is "false", it's just going to return "false" and it's not going to do anything.
```
