(function($) {
	// Setup Materialize CSS
	$(function() {
		$('.sidenav').sidenav();
		$('.scrollspy').scrollSpy();
		$('.parallax').parallax();
		$('.tooltipped').tooltip();
	});
	// Setup smooth scroll for in-page links
	$(function() {
		$('a[href^="#"]').on('click', function() {
			let href= $(this).attr('href');
			let target = $(href == '#' || href == '' ? 'html' : href);
			if (target.length > 0) {
				M.anime({
					targets: [document.documentElement, document.body],
					scrollTop: target.offset().top - $('.navbar-fixed').height(),
					duration: 400,
					easing: 'easeInCubic'
				});
				M.Sidenav.getInstance($('.sidenav')).close();
				return false;
			}
		});
	});
})(jQuery);
