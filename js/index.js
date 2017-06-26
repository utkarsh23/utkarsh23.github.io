$(document).ready(function() {
	particlesJS.load('particles-js', 'js/particles.json', function() {
		console.log('callback - particles.js config loaded');
	});
	$(function(){
		$(".name-print").typed({
			strings: [
				"<span style=\"color: #e57373;\">C</span>  printf(\"I'm Utkarsh.\");",
				"<span style=\"color: #9fa8da;\">C++</span>  cout &lt;&lt; \"I'm Utkarsh.\"",
				"<span style=\"color: #2196f3;\">Python</span>  print \"I'm Utkarsh.\"",
				"<span style=\"color: #8bc34a;\">HTML</span> &lt;p&gt;\"I'm Utkarsh.\"&lt;/p&gt;",
				"<span style=\"color: #ff3d00;\">Javascript</span>  alert(\"I'm Utkarsh.\");",
				"<span style=\"color: #a1887f;\">Java</span>  System.out.println(\"I'm Utkarsh.\");",
				"<span style=\"color: #d50000;\">Ruby</span>  puts \"I'm Utkarsh.\""
			],
			typeSpeed: 45,
			loop: true,
			backDelay: 2000,
			shuffle: true
		});
	});
});