const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100;

function shadow(e) {
    //const width = hero.offsetWidth;
    //const height = hero.offsetHeight;
    const {
        offsetWidth: width,
        offsetHeight: height
    } = hero; //ES6 Destructuring

    //let x = e.offsetX;
    //let y = e.offsetY;
    let {
        offsetX: x,
        offsetY: y
    } = e;

    console.log(this, e.target); // this is the 'hero' and e.target can be either 'hero' or 'h1'
    if (this !== e.target) {
        x = x + e.target.offsetWidth;
        y = y + e.target.offsetHeight;
    }

    // math for calculating the walk
    // If 100 is our walk, then 50 should be as high as we go and negative 50 is as low as we should go
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    //text.style.textShadow = `${xWalk}px ${yWalk}px 0 red`;
    text.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
      ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
      ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
      ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
    `;

}


hero.addEventListener('mousemove', shadow);