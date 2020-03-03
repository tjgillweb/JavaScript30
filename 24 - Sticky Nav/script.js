const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop; //top of nav

// runs every single page scroll
function fixNav() {
    if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px'; //height of nav
        document.body.classList.add('fixed-nav');
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
    }
}
window.addEventListener('scroll', fixNav);