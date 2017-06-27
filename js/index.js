$(document).ready(function() {
	$(".button-collapse").sideNav();
	$('.materialboxed').materialbox();
	particlesJS.load('particles-js', 'js/particles.json', function() {
		console.log('callback - particles.js config loaded');
	});
	var details_string = "Name: Utkarsh Patil<br>";
	details_string += "Age: 19<br><br>";
	details_string += "Education:<br>";
	details_string += "National Institute of Technology Karnataka, Surathkal<br>";
	details_string += "B.Tech. in Information Technology (IT)<br>";
	details_string += "2016 - present<br><br>";
	details_string += "The Indian High School, Dubai<br>";
	details_string += "Grades 3 - 12<br>";
	details_string += "2006 - 2016<br><br>";
	details_string += "Website: https://utkarsh23.github.io/"
	$(".details-print").typed({
		strings: [
			details_string,
		],
		typeSpeed: 10,
	});
	$('#terminal-like').height($('#aboutmecontent').height());
	if (screen.width > 600)
	{
		$('#black-screen').height($('#terminal-like').height() - 25);
	}
});

$(window).scroll(function() {
	if ($('#aboutmecontainer').offset().top - $(window).scrollTop() <= 20) {
		$('.navigation-bar').removeClass('transparent').addClass('indigo').addClass('darken-4');
	}
	else {
		$('.navigation-bar').removeClass('indigo').removeClass('darken-4').addClass('transparent');
	}
});