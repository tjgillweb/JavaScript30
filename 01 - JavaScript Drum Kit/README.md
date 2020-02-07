# 01 - Drum Kit

**Challenge:** When you press a key on your keyboard it plays the corresponding key sound and it also animates the key pressed(button on the screen) by scaling it and adding a border around it.

**Things to Learn:** Key Events, playing audio, listening for the transitionend event

So, lets begin!

When you keyup or keydown, there is a an associated keycode associated with that key. There is a tool where we can check the associated keycode for the corresponding key. You can find it [here].(http://keycode.info/)

First, we need to listen for the keyup event

`window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(``audio[data-key = "${e.keyCode}"]``);  //use of template string`
    
    `stop the function from running altogether so that if we press some other key on the keyboard no audio is played
    if (!audio) return;
    
    //if you call .play on an audio element that is already playing, it won't play it again. So wee need to rewind it to the start of the     audio element so that if you hit it in succession over and over again, it will just rewind it to the start
    
    audio.currentTime = 0; //rewind to the start
    audio.play();
});`
