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
  // Optional parameters
  slidesPerView: 4,
  spaceBetween: 26,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  // Responsive breakpoints
  // breakpoints: {
    // when window width is >= 320px
  //   1440: {
  //     slidesPerView: 4,
  //     spaceBetween: 20
  //   },
  //   // when window width is >= 480px
  //   480: {
  //     slidesPerView: 3,
  //     spaceBetween: 30
  //   },
  //   // when window width is >= 640px
  //   640: {
  //     slidesPerView: 4,
  //     spaceBetween: 40
  //   }
  // };
  loop: false,
  watchOverflow: true,
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
});