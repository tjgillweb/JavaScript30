# 13 - Slide in on Scroll

**Challenge:** Build a slide in on scroll, when you scroll down the page,the images will slide themselves in from the left or from the right, and add some cool animation effects to it.

**Things To Learn:** Window scroll event, console.count(), window.scrollY, sliderImage.offsetTop, debouncing (which will make sure that it is not just hammering on scroll).

**Demo:**[here](https://tjgillweb.github.io/JavaScript30/13%20-%20Slide%20in%20on%20Scroll/).

![](images/slide-on-scroll-screenshot.gif)

So, lets begin!

### In CSS
- We have translated the images off-screen just a little bit as well as the opacity is set to zero.
- We have also scaled them at 95% so it just gets a little bit of nice little fade-in effect.
```CSS
.slide-in {
    opacity: 0;
    transition: all .5s;
}

.align-left.slide-in {
    transform: translateX(-30%) scale(0.95);
}

.align-right.slide-in {
    transform: translateX(30%) scale(0.95);
}
```

- So, by default the images are going to be hidden, and when they scroll into view or when they are half-scrolled into view,
We will apply a class called `active`, and that will set the opacity to one and translate the X to zero
putting it where it was and scaling it back up from 95% to 1 or 100%.
```CSS
.slide-in.active {
    opacity: 1;
    transform: translateX(0%) scale(1);
}
```

### In Javascript

- First thing is we need to do is select all of the images that we are going to be listening for.
```Javascript
const sliderImages = document.querySelectorAll('.slide-in');
```
- Create a function called check-slide that will run every time the person scrolls. 
```Javascript
function checkSlide(e) {
    console.log(e);
    console.count(e);
}
window.addEventListener('scroll', checkSlide);
```
- When we open up the devTools, and watch the console, we will see we have logged hundreds of events in just one scroll and this can be a performance issue because if I just like flick my finger, we're gonna run that function 50 times, and that is too much.
- So, what we will do is `debounce`it, which means that we will only run this function at most 'however many' seconds.
- Essentially, what debounce does is that you pass it a function and it will run debounce all the time when we scroll, but it will actually only run the function `checkSlide` once every 20 milliseconds or once every 100 milliseconds.

// Now when we scroll from top to bottom it's only running 7 times versus 50 times
```Javascript
window.addEventListener('scroll', debounce(checkSlide));
window.addEventListener('scroll', debounce(checkSlide, 500)); //check once every half a second, i.e. 500 milliseconds.
```
***Tip:*** Make sure you debounce your scroll functions

- Now the next thing we're going to do is loop over every single image and figure out where the image needs to then be shown.
- When we scroll halfway through where the image needs to be shown, i.e. the image is just peaking out about 50%, that's the point when the image should be on the page at least 50% of its height, then we want to animate that on in.
```Javascript
function checkSlide(e) {
    sliderImages.forEach(sliderImage => {
        // math to decide whether the image is on the page or not
    })
}
```
- We need to figure out how far is the page being scrolled down, using `window.scrollY`.
- But `window.scrollY` tells us how much we are scrolled down at the very top of our browser. But We want to know where
we are at the very bottom of our window, the viewport that we have here. 
```Javascript
 // pixel level of when each of the images should slide in at. 
const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2; // halfway through the image
```

- Now we need to figure out where's the bottom of the image because we also want to know if we scrolled past the image, it should slide itself back out.
- `offsetTop` is going to tell us the top of this image is how far from the top of the actual window here. It's going to give us a pixel level of how far down it actually is. Then we want to know where's the bottom of the image is. 
```Javascript
 //bottom of the image
 const imageBottom = sliderImage.offsetTop + sliderImage.height;
```

- Now, we need to figure out:
  - is the image half shown? 
  - if we're not scrolled past it
```Javascript
 const isHalfShown = slideInAt > sliderImage.offsetTop;
 const isNotScrolledPast = window.scrollY < imageBottom;

    if (isHalfShown && isNotScrolledPast) {
        sliderImage.classList.add('active');
    } else {
        sliderImage.classList.remove('active');
    }
```

Here is the finished JS:
```Javascript
const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    sliderImages.forEach(sliderImage => {
        // math to decide whether the image is on the page or not

        // halfway through the image
        // pixel level of when each of the images should slide in at.
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;

        //bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.height;

        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;

        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active');
        } else {
            sliderImage.classList.remove('active');
        }
    });
}
window.addEventListener('scroll', debounce(checkSlide));
```

