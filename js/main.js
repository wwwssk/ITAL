$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active')
	});
})


$(document).ready(function() {
	$('.mobile__plus').click(function(event) {
		$('.footer__information').toggleClass('active__plus')
	});
})
$(document).ready(function() {
	$('.mobile__plus').click(function(event) {
		$('.mobile__plus').toggleClass('mobile__plus-active')
	});
})
$(document).ready(function() {
	$('.menu__link').click(function(event) {
		$('.header__burger,.header__menu').removeClass('active')
	});
})