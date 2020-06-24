const elementsPhone = document.querySelectorAll('.input-phone');
const maskOptions = {
    mask: '+{7}(000)000-00-00',
    lazy: false,
    placeholderChar: '0'
};

elementsPhone.forEach(element => {
    IMask(element, maskOptions);
});

const element = document.querySelector('select');
const choices = new Choices(element, {
    searchEnabled: false
});


flatpickr("#date", {
    dateFormat: "m/d",
    minDate: "today"
});

flatpickr("#time", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    time_24hr: true
});

const mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    autoHeight: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 30,
        slideShadows: false,
    },
});


const onTabClick = function (idContainer, idElement) {

    let dataAttribute = `[data-${idContainer}`;
    for (let item of document.querySelectorAll(`${dataAttribute}-name`)) {
        item.classList.remove('active');
    }
    for (let item of document.querySelectorAll(`${dataAttribute}-tab`)) {
        item.classList.remove('active');
        item.classList.remove('fade');
    }

    document.querySelector(`${dataAttribute}-name=${idElement}]`).classList.add('active');
    document.querySelector(`${dataAttribute}-tab=${idElement}]`).classList.add('active');
    document.querySelector(`${dataAttribute}-tab=${idElement}]`).classList.add('fade');

}

let tabsName = document.querySelectorAll('.tab-name');

tabsName.forEach(tab => {
    tab.addEventListener('click', (event) => {
        onTabClick(event.target.parentElement.id, event.target.dataset.menuTabsName, );
    });
});

const lightbox = GLightbox({
    selector: '.gallery-image',
    touchNavigation: true,
    loop: true,
});

let anchors = document.querySelectorAll('[href^="#"]'),
    speed = 0.3;


for (let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener('click', (e) => {

        let w = window.pageYOffset,
            blockId = event.target.getAttribute('href');

        let t = document.querySelector(blockId).getBoundingClientRect().top,
            start = null;

        requestAnimationFrame(step);

        function step(time) {
            if (start === null) start = time;

            let progress = time - start,
                r = (t < 0 ? Math.max(w - progress / speed, w + t) : Math.min(w + progress / speed, w + t));

            window.scrollTo(0, r);

            if (r != w + t) {
                requestAnimationFrame(step);
            } else {
                location.hash = blockId
            }
        }
    }, false);
}

const mobileMenuBtn = document.querySelector('.header-navigation-menu'),
    mobileMenu = document.querySelector('.header-navigation'),
    mobileMenuClose = document.querySelector('.header-navigation-close');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

mobileMenuClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});