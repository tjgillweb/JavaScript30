# 02 - JS and CSS Clock

**Challenge:** Create a CSS Clock that takes the current time from JavaScript and animates the hands of the clock based on the current hour, minutes and seconds.

**Things To Learn:**

**Demo:**

So, lets begin!

### In CSS
- We will apply a rotate to each of the hands depending on what time it currently is.
By default, the hand rotates from the center (transform-origin: 50%). But, we want to rotate the hand on the very right hand side.
So, we will set the *transform-origin: 100%* .

- Now, the other problem is that the clock hands don't start at 12'o clock because by default the divs are block and they start from left to right.
So, to fix that we use *transform: rotate(90deg)*.

- Set .hand *transition: all 0.05s* this tells the browser to gradually apply any changes to the element's styling over a 0.05 second period

- And finally set the *transition-timing-function:* to whatever function you prefer, or define your own using the cubic-bezier() property value for the real clock tic-tock-like effect

```
.hand{
  transform-origin: 100%;
  transform: rotate(90deg);
  transition: all 0.05s;
  transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
}
```
### In JavaScript
    
We need to turn the hours, minutes and seconds into degrees. At 0 it's going to be 0 degrees, at 100% it will be 360 degrees.

```    
    function setDate() {
      const now = new Date();

      const seconds = now.getSeconds();
      const secondsDegrees = ((seconds / 60) * 360) + 90;
      secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

      const mins = now.getMinutes();
      const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
      minsHand.style.transform = `rotate(${minsDegrees}deg)`;

      const hour = now.getHours();
      const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
      hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    }

    setInterval(setDate, 1000);
```
