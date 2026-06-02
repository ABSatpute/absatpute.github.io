/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
};
showMenu('nav-toggle', 'nav-menu');

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    /*Active link*/
    navLink.forEach((n) => n.classList.remove('active'));
    this.classList.add('active');

    /*Remove menu mobile*/
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 150, // offset to trigger active state slightly earlier for fixed headers
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (sectionsClass) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                sectionsClass.classList.add('active');
            } else {
                sectionsClass.classList.remove('active');
            }
        }
    });
};
window.addEventListener('scroll', scrollActive);


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 650,
    reset: true,
});

/*GLOBAL SECTION TITLES*/
sr.reveal('.section-title', { delay: 100 });

/*SCROLL HOME*/
sr.reveal('.home__title', { delay: 100 });
sr.reveal('.home__subtitle', { delay: 150 });
sr.reveal('.home__button', { delay: 200 });
sr.reveal('.home__social-icon', { interval: 150 });

/*SCROLL ABOUT*/
sr.reveal('.about__img', { delay: 100 });
sr.reveal('.about__text', { delay: 300 });

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', { delay: 100 });
sr.reveal('.skill-item', { interval: 80 });
sr.reveal('.skills__img', { delay: 300 });

/*SCROLL EXPERIENCE & EDUCATION*/
sr.reveal('.timeline-item', { interval: 100 });

/*SCROLL PROJECTS*/
sr.reveal('.project-content', { interval: 30 });
sr.reveal('.pro__img', { interval: 70 });
sr.reveal('.pro__text', { interval: 30 });
sr.reveal('.stack', { interval: 5 });
sr.reveal('.links', { interval: 5 });

/*SCROLL CERTIFICATIONS*/
sr.reveal('.cert-card', { interval: 100 });

/*SCROLL CONTACT*/
sr.reveal('.contact__box', { interval: 100 });