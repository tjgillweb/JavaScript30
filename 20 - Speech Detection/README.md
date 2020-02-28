# 20 - Speech Detection

**Challenge:** Learn all about speech recognition in the browser.

**Things To Learn:** parseFloat, mod operator, Array methods map, reduce, split.

**Demo:**[here](https://tjgillweb.github.io/JavaScript30/20%20-%20Speech%20Detection/).

![](images/adding-times-reduce.png)

So, lets begin!

While it's not perfect, it's actually really impressive that you can do this without any libraries or external APIs, just straight in the browser.

**`SpeechRecognition`** :  It's a global variable that lives in the browser and that lives on top of the window. In Chrome it lives at Webkit SpeechRecognition and currently it's only available in Firefox.
```Javascript
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
```
- Create a new instance of SpeechRecognition
```Javascript
const recognition = new SpeechRecognition();
```
- Set `interimResults` on the `recognition` variable. It will populate the screen as you speak, and if you don't do that, you need to stop speaking before it will give you anything. Which is a bit frustrating.
- So we want to be able to see what we're saying as we are speaking.
```Javascript
recognition.interimResults = true;
```

- Then we need to create a paragraph. When I stop speaking, it creates a new paragraph as if we were saying a new sentence.
- Then we also need to get the words.
```Javascript
let p = document.createElement("p");
const words = document.querySelector('.words');
words.appendChild(p);
```

- Add an event listener but we don't listen for click but we listen for a result. And when the results comes back, we're going to get an event.
- In the event we will get e.results which we assign to the transcript variable.
- `e.results` is a LIST, NOT AN ARRAY.
- We need to grab the first thing from each of LIST items, so we have to map transcript on result[0].
- We just need the nested stuff inside the LIST and convert it into just a plain old string that we can see.
```Javascript
recognition.addEventListener('result', e => {
    //console.log(e.results);
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript) //gets an array of the different pieces that it thinks I said
        .join('') //join those two pieces together because we want one big string
        
        p.textContent = transcript;
    // but when I start talking again, it overwrites the sentence. So we need to check if isFinal is true
    if(e.results[0].isFinal){
        //create a new paragraph
        p = document.createElement('p');
        words.appendChild(p);
    }
    console.log(transcript);
});
```

- You will notice that if you stopped speaking and then start speaking again, it doesn't work.
- That happens because we're listening for the result but then once the result is finished it's no longer listening. 
- So what we need to do is add a second event listener for the `end` event. And when that ends, we simply just call the `recognition.start` function.
```Javascript
recognition.addEventListener('end', recognition.start);
```


