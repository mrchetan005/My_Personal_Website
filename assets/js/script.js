// ! ==================== PRELOADER ====================

const loader = document.querySelector('.pre-loader');
window.addEventListener('load', () => {
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 700);
});

// ! ==================== MENU SHOW Y HIDDEN ====================

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close'),
    navLink = document.querySelectorAll('.nav__link');

// ? MENU SHOW
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// ? MENU HIDE
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// ! ==================== REMOVE MENU MOBILE ====================

navLink.forEach(n => n.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
}));

// ! ==================== Dynamic Text ====================

const dynamicText = document.querySelector('.dynamic-text');
const textLoad = () => {
    setTimeout(() => {
        dynamicText.innerText = 'Frontend Developer';
    }, 0);
    setTimeout(() => {
        dynamicText.innerText = 'Freelancer';
    }, 6000);
    setTimeout(() => {
        dynamicText.innerText = 'Backend Developer';
    }, 12000);
}
textLoad();
setInterval(textLoad, 18000);

// ! ==================== SKILLS ACCORDIAN ====================

const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    let itemClass = this.parentNode.className;
    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close';
    }
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open';
    }
}
skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
})

// ! ==================== SERVICE MODAL ====================

const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    });
});

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        });
    });
})

// ! ==================== FEATURED CARD ====================

const cards = document.querySelectorAll('.card__inner');
cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('is-flipped');
    });
});

// ! ==================== PORTFOLIO ====================

const frames = document.getElementsByClassName('frame');
const projectContent = document.getElementsByClassName('portfolio__content');
const projectWrapper = document.querySelectorAll('.portfolio__wrapper');

function toggleProject() {
    for (let i = 0; i < projectContent.length; i++) {
        frames[i].className = 'frame';
        projectContent[i].className = 'portfolio__content';
    }
    const contentId = this.parentNode.id;
    frames[contentId].className = 'frame active';
    this.parentNode.className = 'portfolio__content active';

};

projectWrapper.forEach(project => {
    project.addEventListener('click', toggleProject);
});

// ! ==================== TESTIMONIALS ====================

let swiperTestimonial = new Swiper(".testimonial__container", {
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        480: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 2,
        },
    }
});

// ! ==================== SCROLL SECTION ACTIVE LINK ====================

const sections = document.querySelectorAll('section[id]');
function scrollActive() {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']')?.classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']')?.classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);

// ! ==================== CHANGE BACKGROUND HEADER ====================

function scrollHeader() {
    const nav = document.getElementById('header');
    if (this.scrollY >= 80) {
        nav.classList.add('scroll-header');
    } else {
        nav.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);

// ! ==================== CUSTOM CURSOR ====================

const cursorDot = document.querySelector('[data-cursor-dot]'),
    cursorOutline = document.querySelector('[data-cursor-outline]'),
    cursorHover = document.querySelectorAll('.uil, img, image, button, a, p, h1, span, .featured__card, .portfolio__wrapper, .skills__content, input, textarea');

const cursorMove = (e) => {
    const posX = e.clientX;
    const posY = e.clientY;
    cursorDot.style.top = `${posY}px`;
    cursorDot.style.left = `${posX}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: 'both' });
}

window.addEventListener('mousemove', cursorMove);

cursorHover.forEach((link) => {
    link.addEventListener('mouseover', () => {
        cursorDot.classList.add('link-grow');
        if (link.classList.contains('imgg')) {
            cursorDot.classList.add('img-grow')
        }
    });
    link.addEventListener('mouseleave', () => {
        cursorDot.classList.remove('link-grow');
        if (cursorDot.classList.contains('img-grow')) {
            cursorDot.classList.remove('img-grow');
        }
    });
});


// ! ==================== SHOW SCROLL Up ====================

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 560) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp);

// ! ==================== THEME SETTINGS ====================


const themeSettingButton = document.getElementById('theme-button'),
    themeSidebar = document.getElementById('theme__settings-sidebar'),
    colorRangeInput = document.getElementById('color__range'),
    applyColor = document.getElementById('apply__color'),
    themeWrapper = document.querySelector('.wrapper'),
    lightThemeButton = document.querySelector('.light'),
    darkThemeButton = document.querySelector('.dark'),
    overlay = document.querySelector('.overlay'),
    darkTheme = 'dark-theme',
    selectedDarkTheme = localStorage.getItem('selected-theme');

selectedDarkTheme === 'dark' ? changeDark() : changeLight();
let color = localStorage.getItem('hue-color') || 230;
document.documentElement.style.setProperty('--hue-color', color);


function toggleSettingsButton() {
    if (themeSettingButton.classList.contains('active')) {
        overlay.classList.add('hide');
    } else {
        overlay.classList.remove('hide');
    }
    themeSettingButton.classList.toggle('active');
    themeSidebar.classList.toggle('active');
}

function changeThemeColor(e) {
    color = e.target.value;
    applyColor.style.backgroundColor = `hsl(${color}, 69%, 61%)`;
}

function applyThemeColor() {
    loader.classList.remove('hidden');
    setTimeout(() => {
        toggleSettingsButton();
        document.documentElement.style.setProperty('--hue-color', color);
        loader.classList.add('hidden');
    }, 1000);
    localStorage.setItem('hue-color', color);
}

function changeDark() {
    document.body.classList.add('dark-theme');
    lightThemeButton.classList.remove('active');
    darkThemeButton.classList.add('active');
    localStorage.setItem('selected-theme', 'dark');
    bodyColor = 'hsl(hueColor, 18%, 3%)';
}

function changeLight() {
    document.body.classList.remove('dark-theme');
    darkThemeButton.classList.remove('active');
    lightThemeButton.classList.add('active');
    localStorage.setItem('selected-theme', 'light');

}

themeSettingButton.addEventListener('click', toggleSettingsButton);
darkThemeButton.addEventListener('click', changeDark);
lightThemeButton.addEventListener('click', changeLight);
overlay.addEventListener('click', toggleSettingsButton);
colorRangeInput.addEventListener('input', changeThemeColor);
applyColor.addEventListener('click', applyThemeColor);


// ! ==================== QUOTES API ====================

const promiseOfQuote = fetch('https://type.fit/api/quotes')
    .then(response => response.json())
    .then((data) => {
        const randomQuote = data[Math.floor(Math.random() * data.length)];
        document.querySelector('#home').insertAdjacentHTML('afterbegin', `
        <div class="container" style="text-align:center">
            <h3 style="color:var(--title-color); font-size:1rem; text-transform:uppercase; margin-bottom:10px">Quote of The Day</h3>
            <p class="shining-text" style="font-size:0.9rem">${randomQuote.text}</p>
            <p class="shining-text" style="font-size:0.8rem">- ${randomQuote.author}</p>
        </div>
    `);
    })
    .catch(err => {
        console.log(err);
    });


