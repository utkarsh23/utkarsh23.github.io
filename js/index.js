$(document).ready(function() {
	$(".button-collapse").sideNav();
	$('.materialboxed').materialbox();
	particlesJS.load('particles-js', 'js/particles.json', function() {
		console.log('callback - particles.js config loaded');
	});
	$(function(){
		$(".name-print").typed({
			strings: [
				"I'm Utkarsh. ^2000Feel free to explore my website.",
			],
			typeSpeed: 30,
			shuffle: true
		});
	});
});

$(window).scroll(function() {
	if ($(window).scrollTop() >= ($(window).height() - $('#particles-js').height())) {
		$('.navigation-bar').removeClass('transparent').addClass('indigo').addClass('darken-4');
	}
	else {
		$('.navigation-bar').removeClass('indigo').removeClass('darken-4').addClass('transparent');
	}
});