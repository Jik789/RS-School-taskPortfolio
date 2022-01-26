/* Перевод странички */

const i18Obj = {
  'en': {
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Rotouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'winter': 'Winter',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    'order': 'Order shooting',
    'contact-me': 'Contact me',
    'send-message': 'Send message'
  },
  'ru': {
    'skills': 'Навыки',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'hire': 'Пригласить',
    'skill-title-1': 'Фотография',
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skill-title-2': 'Видеосъемка',
    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    'winter': 'Зима',
    'spring': 'Весна',
    'summer': 'Лето',
    'autumn': 'Осень',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    'order': 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'send-message': 'Отправить'
  }
}

const langBtns = document.querySelector('.lang');
const langItem = document.querySelectorAll('.lang__item');

langBtns.addEventListener('click', function (event) {
  let speech;
  if(event.target.dataset.lng === "en") {
    langItem.forEach((item) => item.classList.remove('lang__color'));
    speech = event.target.dataset.lng;
    event.target.classList.add('lang__color');
    getTranslate(speech);
  }
  if(event.target.dataset.lng === "ru") {
    langItem.forEach((item) => item.classList.remove('lang__color'));
    speech = event.target.dataset.lng;
    event.target.classList.add('lang__color');
    getTranslate(speech);
  }
})

function getTranslate(lng) {
  const lang = document.querySelectorAll('[data-i18]');
  lang.forEach((item) => item.textContent = i18Obj[lng][item.dataset.i18]);
}

/* Бургер Меню */

const iconMenu = document.querySelector('.header__burger');
const navMenu = document.querySelector('.navigation');

iconMenu.addEventListener("click", function(e) {
  iconMenu.classList.toggle('_active');
  navMenu.classList.toggle('_active');
});


function closeMenu() {
  if (iconMenu.classList.contains('_active')) {
    iconMenu.classList.remove('_active');
    navMenu.classList.remove('_active');
  }
};

const navLinks = document.querySelectorAll('.navigation__link');
navLinks.forEach((el) => el.addEventListener('click', closeMenu));

/* Смена фотографий */

const portfolioBtns = document.querySelector('.season');
const seasonItem = document.querySelectorAll('.season__item');
const portfolioImages = document.querySelectorAll('.portfolio-image');


portfolioBtns.addEventListener('click', function (event) {
  if(event.target.dataset.season == "winter") {
    seasonItem.forEach((item) => item.classList.remove('_btn-transparent'));
    portfolioImages.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`);
    event.target.classList.add('_btn-transparent');
  }
  if(event.target.dataset.season == "spring") {
    seasonItem.forEach((item) => item.classList.remove('_btn-transparent'));
    portfolioImages.forEach((img, index) => img.src = `./assets/img/spring/${index + 1}.jpg`);
    event.target.classList.add('_btn-transparent');
  }
  if(event.target.dataset.season == "summer") {
    seasonItem.forEach((item) => item.classList.remove('_btn-transparent'));
    portfolioImages.forEach((img, index) => img.src = `./assets/img/summer/${index + 1}.jpg`);
    event.target.classList.add('_btn-transparent');
  }
  if(event.target.dataset.season == "autumn") {
    seasonItem.forEach((item) => item.classList.remove('_btn-transparent'));
    portfolioImages.forEach((img, index) => img.src = `./assets/img/autumn/${index + 1}.jpg`);
    event.target.classList.add('_btn-transparent');
  }
})

/* Смена темы */

const lightButton = document.querySelector('.theme');
const lightItem = document.querySelectorAll('[data-theme]');

lightButton.addEventListener('click', function (event) {
  lightItem.forEach((item) => item.classList.toggle('_light_theme'));
  lightButton.classList.toggle('theme__logo-img2')
})