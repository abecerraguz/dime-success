$(document).ready(function () {
			$('#login-trigger').click(function () {
			$(this).next('#login-content').slideToggle();
			$(this).toggleClass('active');
			console.log('holalalal');
			});
			$('.carousel').carousel({
			interval: 5000
			})

			$("#btn").click(function () {
				$("#recuperar").addClass('open');
				$("#open").toggle();
			});
			$("#btn").click(function (e) {
				e.preventdefault();
			});

	//SCROLL TOP CON ANIMATE
	var up = $('.up');
	up.hide();
	up.click(function(event) {
		$('html,body').animate({
			scrollTop: 0},
			500, function() {
			console.log('Se realizo la animación')
		});
	});

	$(window).scroll(function (event) {
		var scroll = $(window).scrollTop();
		if(scroll >= 100){
			up.fadeIn();
		}else{
			up.fadeOut();
		}
	});




});

