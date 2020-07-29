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
});

