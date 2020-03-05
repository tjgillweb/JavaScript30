let countdown; //variable to store the countdown interval
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

// seconds is the number of seconds you wish to run the timer for
function timer(seconds) {
    //clear any existing timers
    clearInterval(countdown);

    //when the timer started
    const now = Date.now(); // current timestamp in milliseconds
    // when the timer stops
    const then = now + seconds * 1000; //to convert seconds into milliseconds
    displayTimeLeft(seconds); // if timer(10), then this displays 10 and setInterval shows 9,8,7,...
    displayEndTime(then);

    //every single second, we need to display the amount of time left.

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000); //convert milliseconds to seconds
        //check if we should stop it
        if (secondsLeft < 0) {
            clearInterval(countdown);
        }

        //display it
        displayTimeLeft(secondsLeft);

    }, 1000) //run every 1000ms or 1s
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    timerDisplay.textContent = display;
    document.title = display;
}

//timestamp of when you want to finish i.e. the 'then' variable
function displayEndTime(timestamp) {
    //turn the timestamp into a date
    const end = new Date(timestamp);
    const hour = end.getHours();
    const adjustedHour = hour > 12 ? hour - 12 : hour; // adjust time according to 12-hour clock
    const minutes = end.getMinutes();
    endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function (e) {
    e.preventDefault(); //prevent the form from submitting the value in the URL
    const mins = this.minutes.value; // same as document.customForm.minutes.value
    timer(mins * 60); //convert minutes to seconds
    this.reset(); //reset the form
});