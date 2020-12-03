//Back to top button
let backToTopButton = document.querySelector('.back-to-top');

const trackScroll = () => {
    window.pageYOffset > document.documentElement.clientHeight ? backToTopButton.classList.add('back-to-top_show') : backToTopButton.classList.remove('back-to-top_show');
}

const backToTop = () => {
    if(window.pageYOffset > 0) {
        window.scrollBy(0, -50);
        setTimeout(backToTop, 0);
    }
}

window.addEventListener('scroll', trackScroll);
backToTopButton.addEventListener('click', backToTop);
//Scroll to anchor
let anchors = document.querySelectorAll('.scroll-to');
for(let anchor of anchors) {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();

        const blockId = anchor.getAttribute('href');
        document.querySelector(blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        
    })
}




