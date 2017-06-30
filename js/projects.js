$(document).ready(function() {
	$(".button-collapse").sideNav();
	$('.materialboxed').materialbox();
	particlesJS.load('bubbles-js', 'js/bubbles.json', function() {
		console.log('callback - bubbles.json config loaded');
	});
	$("#quotes-print").typed({
		strings: [
			"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
			"Stay Hungry. Stay Foolish.",
			"Nothing is work unless you'd rather be doing something else.",
			"The past cannot be changed. The future is yet in your power.",
			"If you're going through hell, keep going."
		],
		typeSpeed: 0,
		loop: true,
		backDelay: 2000,
		backSpeed: 0,
		shuffle: true
	});
	$('#inspired-id').height($('#links-id').height());
});

$(window).scroll(function() {
	if ($('#projectscontainer').offset().top - $(window).scrollTop() <= 40) {
		$('.navigation').removeClass('transparent').css('background-color', '#2c2e43');
	}
	else {
		$('.navigation').addClass('transparent').css('background-color', 'inherit');
	}
});