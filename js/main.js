// ---------- JQuery -----------

$(document).ready(function(){

	// ---------- Burger Menu -----------

  var menuButton = document.querySelector(".burger-button");
  menuButton.addEventListener("click", function () {
    document.querySelector(".header__burger-menu").classList.toggle("header__burger-menu--visible");
    $('body').toggleClass('hold');
  });

//   // ---------- Hotel Slider -----------

  const sectionsSlider = new Swiper('.sections__slider', {
  // Default parameters
  slidesPerView: 4,
  spaceBetween: 26,

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
      slidesPerColumn: 2,
      slidesPerColumnFill: 'row',
    },
    // when window width is >= 640px
    568: {
      slidesPerView: 2,
      spaceBetween: 26,
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 26,
    },
    993: {
      slidesPerView: 4,
      spaceBetween: 26,
    },
  },
  loop: false,
  watchOverflow: true,
  autoHaight: false,
  // Navigation arrows
  navigation: {
    nextEl: '.sections__slider-button--next',
    prevEl: '.sections__slider-button--prev',
  },
	// Переключение слайдера клавиатурой
	keyboard: {
    enabled: true,
		onlyInViewport: false,
  },
});
  const unreleasedSlider = new Swiper('.unreleased__slider', {
   // Optional parameters
  slidesPerView: 5,
  spaceBetween: 31,
  cssMode: true,

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    490: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 768px
    640: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 48,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 36,
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
  height: 298,
  loop: false,
  watchOverflow: true,
  // autoHaight: true,
  // Navigation arrows
  navigation: {
    nextEl: '.unreleased__slider-button--next',
    prevEl: '.unreleased__slider-button--prev',
  },
	// Переключение слайдера клавиатурой
	keyboard: {
    enabled: true,
		onlyInViewport: false,
  },
});
});