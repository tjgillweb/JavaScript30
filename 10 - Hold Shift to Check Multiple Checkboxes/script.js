const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {

    let inBetween = false; //flag variable

    //check if the shift key is down
    //and check if the checkbox is checking (not unchecking)
    if (e.shiftKey && this.checked) {
        //go ahead and do what we want
        //loop through every single checkbox every time this happens
        //look for the first one that was checked, and then till the last one was checked.
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox == this || checkbox == lastChecked) { //checks for both top to bottom and bottom to top
                inBetween = !inBetween; //if its true then it becomes false. If its false, then it becomes true
                console.log('Starting to check them in between');
            }

            // Once we hit the first checkbox(that is checked) inBetween becomes true which is going to check if it's on and then we programatically set it to checked with JS.
            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }
    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));