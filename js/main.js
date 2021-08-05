// ---------- JQuery -----------

$(document).ready(function(){

	// ---------- Burger Menu -----------

  var menuButton = document.querySelector(".burger-button");
  menuButton.addEventListener("click", function () {
    document.querySelector(".header__burger-menu").classList.toggle("header__burger-menu--visible");
		console.log('click');
  });

//   // ---------- Hotel Slider -----------

  const sectionsSlider = new Swiper('.sections__slider', {
  // Default parameters
  slidesPerView: 4,
  spaceBetween: 26,
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
  // // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
      slidesPerColumn: 2,
      slidesPerColumnFill: 'row',
    },
    // when window width is >= 640px
    567: {
      slidesPerView: 2,
      spaceBetween: 26,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 26,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 26,
    },
  },
  // loop: false,
  // watchOverflow: true,
  // autoHaight: false,
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
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  loop: false,
  watchOverflow: true,
  autoHaight: true,
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