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


//scrollspy

let section = document.querySelectorAll('body > section');

const onScroll = () => {
    let currentPosition = window.scrollY;

    section.forEach((el) => {
        if(el.offsetTop <= currentPosition && el.offsetTop + el.offsetHeight > currentPosition) {
            anchors.forEach((anchor) => {
                anchor.classList.remove('active');
                if(el.getAttribute('id') === anchor.getAttribute('href').substring(1)) {
                    anchor.classList.add('active')
                }
            })
        }
    })
}

document.addEventListener('scroll', onScroll)

