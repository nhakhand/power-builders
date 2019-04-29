jQuery(document).ready(function($){
	$(".carousel").owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		nav: true,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	});

	$(".service").owlCarousel({
		items: 3,
		margin: 25,
		loop: true,
		dots: true,
		autoplay: true
	});

	$(".testimonial").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		autoplay: true,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	});

	$(".partner-carousel").owlCarousel({
		items: 4,
		margin: 25,
		loop: true,
		dots: true,
		autoplay: true
	});

});