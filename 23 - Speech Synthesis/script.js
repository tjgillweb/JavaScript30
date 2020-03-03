const msg = new SpeechSynthesisUtterance();
// empty array which our voices are going to be dumped into.
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector('[name = "text"]').value;

function populateVoices() {
    voices = this.getVoices();
    //console.log(voices);
    // loop over all of the speech voices and set them as options in the drop down.
    const voiceOptions = voices
        .filter(voice => voice.lang.includes('en'))
        .map(voice => `<option value="${voice.name}" >${voice.name} (${voice.lang})</option>`)
        .join();
    voicesDropdown.innerHTML = voiceOptions;
}

function setVoice() {
    //find the voice that lines up with the value. 
    //console.log(this.value); //gives the value of the selected dropdown
    msg.voice = voices.find(voice => voice.name === this.value);
    toggle();
}

function toggle(startOver = true) {
    speechSynthesis.cancel(); // stop it from speaking
    if (startOver) {
        speechSynthesis.speak(msg);
    }
}

function setOption() {
    console.log(this.name, this.value);
    msg[this.name] = this.value;
    toggle();
}
speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('change', setOption));
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));