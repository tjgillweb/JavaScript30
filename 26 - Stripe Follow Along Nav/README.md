# 26 - Stripe Follow Along Nav

**Challenge:** Make a dropdown navigation such that when you hover over top of one of the navigation links, it's going to resize itself, it's going to match the width and the height of actual content and transition itself wherever it's going to go.

**Things To Learn:** Use an arrow function to retain the value of 'this', apply transitions in conjunction, one after the other, coordinates

**Demo:**[here](https://tjgillweb.github.io/JavaScript30/26%20-%20Stripe%20Follow%20Along%20Nav/).

![](images/follow-along-nav.gif)

So, lets begin!

### HTML
- When we hover over different nav items, the dropdown with a white background that transitions from left to right are not three separate divs, that's just one and it's going to follow along with the content.
```HTML
// the white background that is going to follow around
<div class="dropdownBackground">
  <span class="arrow"></span>
</div>
```
- We have three li's that are going to be hovered over. The top level li's will be our triggers. 
```HTML
<ul class="cool">
   <li>... </li>
   <li>... </li>
   <li>... </li>
</ul>
```

### Javascript
```Javascript
//grab the triggers(the three li's)
const triggers = document.querySelectorAll('.cool > li');
// grab the dropdown background which is the white div
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');
```

- Listen for a hover in and a hover out or a mouse enter and a mouse leave on each of those list items. 
```Javascript
function handleEnter() {
    console.log('ENTER!!');
}

function handleLeave() {
    console.log('LEAVE!!');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
```

- We need to break this down into two parts:
  - First part is I just want to get the contents of the dropdown showing. I want to show whenever I hover over li, I want to find the dropdown inside of it and then display it. we're going to be adding and removing classes and then leaning on our CSS to actually do that for us.
  - Second part is to figure out how big is the ul with class of dropdown and then can that little white div go behind it so we get the animation of it moving around.
  
#### First Part
```Javascript  
function handleEnter() {
    this.classList.add('trigger-enter');
    setTimeout(function(){
        console.log(this); //this gives the window object
        this.classList.add('trigger-enter-active') //this doesn't work.
    }, 150);
}
```
- When you enter into a function, the value of this changes. However, if you change that into an arrow function, the value of this is inherited from the parent function, which is going to be exactly what we want

So change the above code to: 
```Javascript  
function handleEnter() {
    this.classList.add('trigger-enter');
    setTimeout(() => this.classList.add('trigger-enter-active'), 150);
}
```
- See how we applied the class `trigger-enter` and  after 150 milliseconds we apply `trigger-enter-active`.
- This is how animations or transitions work in react or angular. They just apply two separate classes when something enters or leaves and then you can use your CSS just to do that sort of staged move there.

```CSS
.trigger-enter .dropdown {
    display: block;
}

.trigger-enter-active .dropdown {
    opacity: 1;
}
```
-Remove the transitions
```Javascript  
function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
}
```

#### Second Part
- The first thing we need to do is get that white thing on the page(class of background)
```Javascript
function handleEnter() {
...
background.classList.add('open');
}
function handleLeave() {
...
background.classList.remove('open');
}
```
```CSS
.dropdownBackground.open {
    opacity: 1;
}
```
- Now we need to figure out how wide, how high and where on the page does the ul with class of dropdown live so that we can take this white thing and move it on over to where that exists.
```Javascript
const dropdown = this.querySelector('.dropdown');
const dropdownCoords = dropdown.getBoundingClientRect();
```
- Now the other thing is that we need to get information about where the nav is because you cannot assume that this nav tag is always going to be the first thing on the page.
- You might have an h2 above nav that says "hello" and when that happens, you bump everything down.
```Javascript
const navCoords = nav.getBoundingClientRect();
```
- Figure out where are the coords for everything, so we're going to put those two coordinates that we just got together.
```Javascript
const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,  //offset the top coordinates
    left: dropdownCoords.left - navCoords.left
};

background.style.setProperty('width', `${coords.width}px`);
background.style.setProperty('height', `${coords.height}px`);
background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
```

- There is a small problem. When you hover over the links quickly, sometimes you see the content before you actually get to it.

![](images/nav-quick.gif)

- So ,what's happening is that in the setTimeout() function, immediately when we enter, we're going to add a class of trigger-enter and then 150 milliseconds later, we're going to enter trigger-enter-active. But sometimes I'm already hovering off before this is even added.
```Javascript
function handleEnter() {
    this.classList.add('trigger-enter');
    setTimeout(() => {
        if(this.classList.contains('trigger-enter')){
            this.classList.add('trigger-enter-active')
        }
     }, 150);
     ...
 }
 ```
 
 Or we can do this in a short way as:
 ```Javascript
 //the second one runs, only if the first one is true
 setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
 ```
 

