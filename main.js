const targets = document.querySelectorAll('.scroll');
const sections = document.querySelectorAll('.scroll-other');

function setMargin() {
    targets.forEach((target, index) => {
        const marginTop = 600 + index * 200;
        target.style.marginTop = `${marginTop}px`;
    });
}

function scrollParallax(target) {
    scrollPositionY = window.scrollY;
    let targetPositionY = target.getBoundingClientRect().top;
    let rate = (scrollPositionY - targetPositionY) * 0.15;
    
    target.style.transform = `translate3d(0px, ${-rate}px, 0px)`;
}

function scrollAppear(target) {
    let introPosition = target.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if(introPosition < screenPosition) {
        target.classList.add('scroll-appear');
    } else {
        target.classList.remove('scroll-appear');
    }
}

function scrollAppearOther(section) {
    let introPosition = section.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if(introPosition < screenPosition) {
        section.classList.add('scroll-appear-other');
    } else {
        section.classList.remove('scroll-appear-other');
    }
}

setMargin();

window.addEventListener('scroll', () => {
    targets.forEach(target => {
        scrollAppear(target);
        scrollParallax(target);
    });
    sections.forEach(section => {
        scrollAppearOther(section);
    });
});


//BACK TO TOP SCROLL
const showOnPx = 100;
const topBtn = document.querySelector('.back-top');

const scrollContainer = () => {
    return document.documentElement || document.body;
};

document.addEventListener('scroll', () => {
    if (scrollContainer().scrollTop > showOnPx) {
        topBtn.style.opacity = '1';
    } else {
        topBtn.style.opacity = '0';
    }
});

//smooth scroll
const goToTop = () => {
    document.body.scrollIntoView({
        behavior: 'smooth',
    });
};

topBtn.addEventListener('click', goToTop);

// Hamburger Menu Event Listener
const button = document.querySelector('.hamburger-content');
const subNav = document.querySelector('.sub-nav');

button.addEventListener('click', () => {
    subNav.classList.toggle('active');
    button.classList.toggle('active');
});


// Close Mobile Menu after clicking
const subLinks = document.querySelectorAll('.sub-nav ul li a');
const headerLogo = document.querySelector('#header a');

subLinks.forEach(item=> {
    item.addEventListener('click', ()=> {
        subNav.classList.remove('active');
        button.classList.remove('active');
    });
})

headerLogo.addEventListener('click', ()=> {
    subNav.classList.remove('active');
    button.classList.remove('active');
});

