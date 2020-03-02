const triggers = document.querySelectorAll('a');

// create a span tag with a class of 'highlight'
const highlight = document.createElement('span');
highlight.classList.add('highlight');

//put it into the DOM
document.body.append(highlight);

function highlightLink() {
    //highlight triggering on all of the links on the page
    //console.log(this); //log the actual link that we're looking for.
    const linkCoords = this.getBoundingClientRect();
    console.log(linkCoords);
    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX
    }
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;

}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));