# 28 - Video Speed Controller

**Challenge:** Implement a new sort of input that would control how fast the video goes so that rather than you having to click up and down to change the video speed, you
can sort of just like DJ it as you're watching the video to go slower and faster. 

**Things To Learn:** working with `mousemove` events, HTML5 video, string `toFixed` method.

**Demo:**[here](https://tjgillweb.github.io/JavaScript30/28%20-%20Video%20Speed%20Controller/).

![](images/video-speed-scrubber.gif)

So, lets begin!

Pretty much self-explanatory code.

```Javascript
const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');

speed.addEventListener('mousemove', function (e) {
    //shows how far we are, 0 at the top and 410px at the bottom
    //minus this.offsetTOp because we can't assume that this bar is going to be at the top of the screen.
    const y = e.pageY - this.offsetTop; 
    
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
});
```





