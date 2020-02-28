window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// create a new instance of SpeechRecognition
const recognition = new SpeechRecognition();

//as you speak, it will populate it and if you don't do that, you need to stop speaking before it will give you anything.
recognition.interimResults = true;

let p = document.createElement("p");
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', e => {
    console.log(e.results);
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript) //gets an array of the different pieces that it thinks I said
        .join('') //join those two pieces together because we want one big string

    p.textContent = transcript;
    // but when I start talking again, it overwrites the sentence. So we need to check if isFinal is true
    if (e.results[0].isFinal) {
        //create a new paragraph
        p = document.createElement('p');
        words.appendChild(p);
    }
    console.log(transcript);
});

recognition.addEventListener('end', recognition.start);
recognition.start();