(function ($) {
	// Setup Materialize CSS
	$(function () {
		$('.sidenav').sidenav();
		$('.scrollspy').scrollSpy();
		$('.parallax').parallax();
		$('.tooltipped').tooltip();
	});
	// Setup smooth scroll for in-page links
	$(function () {
		$('a[href^="#"]').on('click', function () {
			let href = $(this).attr('href');
			let target = $(href == '#' || href == '' ? 'html' : href);
			if (target.length > 0) {
				anime({
					targets: [document.documentElement, document.body],
					scrollTop: target.offset().top - $('.navbar-fixed').height(),
					duration: 700,
					easing: 'easeInCubic'
				});
				M.Sidenav.getInstance($('.sidenav')).close();
				return false;
			}
		});
	});
	// Banner animation
	$(function () {
		// Animate the name
		let name = $('#index-banner-name');
		name.html(name.text().replace(/\S/g, '<span class="anime-letter" style="opacity: 0;">$&</span>'));
		name.css('visibility', 'visible');
		anime({
				targets: '#index-banner-name .anime-letter',
				opacity: [0, 1],
				easing: "easeInOutQuad",
				duration: 2000,
				delay: (el, i) => 300 + 150 * (i + 1)
			});
		// Animate the description
		let description = $('#index-banner-description');
		description.html(description.text().replace(/\S/g, '<span class="anime-letter" style="display: inline-block; opacity: 0;">$&</span>'));
		description.css('visibility', 'visible');
		anime({
				targets: '#index-banner-description .anime-letter',
				scale: [4, 1],
				opacity: [0, 1],
				translateZ: 0,
				easing: "easeOutExpo",
				duration: 950,
				delay: (el, i) => 2000 + 30 * i
			});
		// Animate the button
		let button = $('#index-banner-button');
		button.css('display', 'inline-block');
		button.css('opacity', '0');
		button.css('visibility', 'visible');
		anime({
			targets: '#index-banner-button',
			opacity: [0, 1],
			translateX: [-300, 0],
			duration: 1500,
			delay: 3150
		});
	});
})(jQuery);
