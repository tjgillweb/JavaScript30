# 25 - Event Capture, Propagation, Bubbling and Once

**Challenge:** Learn about addEventListeners. Explain a couple things about propagation, bubbling, event capturing, as well as using this new property called `once`.

**Things To Learn:** 

**Demo:**[here](https://tjgillweb.github.io/JavaScript30/25%20-%20Event%20Capture,%20Propagation,%20Bubbling%20and%20Once/).

![](images/sticky-nav.gif)

So, lets begin!

We've got three nested divs.
```HTML
<div class="one">
  <div class="two">
    <div class="three">
    </div>
  </div>
</div>
```

Select all the divs and listen for a click.
```Javascript
const divs = document.querySelectorAll('div');

function logText(e){

}
divs.forEach(div => div.addEventListener('click', logText));
```
