# 27- Click and Drag to Scroll

**Challenge:** When you click, drag your mouse and go somewhere, we want it to come along with it.

**Things To Learn:** `mousedown`, `mouseleave`, `mouseout`, `mouseup` and `mousemove` events

**Demo:**[here](https://tjgillweb.github.io/JavaScript30/27-%20Click%20and%20Drag%20to%20Scroll/).

![](images/click-and-drag.gif)

So, lets begin!

- So, when we first click down, we will add a class of active and we will figure out where did I click down. 
- Then when we move the mouse either to the left or to the right, then depending on how far either way we scroll, we are going to figure out how much we're going to be scrolling the div.
- Basically, it's just a combination of `mousedown`, `mouseleave`, `mouseout`, `mouseup` and `mousemove` events.

### Define variables
```Javascript
const slider = document.querySelector('.items');
let isDown = false; // mouse is clicked down or not
let startX; //initial click down on the slider before the mouse starts moving to the left or to the right
let scrollLeft; //slider's scrollLeft during initial scroll
```
```Javascript
slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active')
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return; //stop the function from running
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
});
```
