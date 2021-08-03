// ---------- JQuery -----------

// $(document).ready(function(){

	// ---------- Burger Menu -----------

  var menuButton = document.querySelector(".burger-menu__button");
  menuButton.addEventListener("click", function () {
    document.querySelector(".header__burger-menu").classList.toggle("header__burger-menu--visible");
		console.log('click');
  });
// });