(function ($) {
	// Setup Materialize CSS
	$(function () {
		$('.sidenav').sidenav();
		$('.tooltipped').tooltip();
		$('.scrollspy').scrollSpy();
		$('.parallax').parallax();
		$('.collapsible').collapsible({accordion: false});
	});
	// Banner animation
	var doBannerAnimation = function () {
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
		var button_icon = button.find('.material-icons');
		button_icon.removeClass('pulse');
		anime({
			targets: '#index-banner-button',
			opacity: [0, 1],
			translateX: [-300, 0],
			duration: 1500,
			delay: 3150,
			complete: function(anim) {
				button_icon.addClass('pulse');
			}
		});
	};
	doBannerAnimation();
	// Setup smooth scroll for in-page links
	$(function () {
		$('a[href^="#"]').on('click', function () {
			var tooltip = this.classList.contains('tooltipped') ? M.Tooltip.getInstance($(this)) : null;
			let href = $(this).attr('href');
			let target = $(isTop = href == '#' ? 'html' : href);
			if (target.length > 0) {
				var scrollTop = target.offset().top - $('.navbar-fixed').height();
				anime({
					targets: [document.documentElement, document.body],
					scrollTop: scrollTop,
					duration: 700,
					easing: 'easeInCubic',
					complete: function(anim) {
						if (tooltip) {
							tooltip.close();
						}
						if (scrollTop <= 0) {
							doBannerAnimation();
						}
					}
				});
				M.Sidenav.getInstance($('.sidenav')).close();
				return false;
			}
		});
	});
	// Draw radar chart for languages
	$(function () {
		const dataset = JSON.parse($('#chart-languages-data').text());
		let labels = [], data = [];
		for (let key in dataset) {
			labels.push(key);
			data.push(dataset[key]);
		}
		let ctx = $('#chart-languages');
		var myChart = new Chart(ctx, {
			type: 'radar',
			data: {
				labels: labels,
				datasets: [{
					data: data
				}]
			},
			options: {
				responsive: true,
				layout: {
					padding: 5
				},
				plugins: {
					legend: {
						display: false
					},
				},
				scales: {
					r: {
						min: 0,
						max: 5,
						grid: {
							color: [
								'rgba(0, 0, 0, 0.10)',
								'rgba(255, 0, 0, 0.50)',
								'rgba(0, 0, 0, 0.20)',
								'rgba(0, 0, 0, 0.25)',
								'rgba(0, 0, 0, 0.30)',
							]
						},
						ticks: {
							stepSize: 1,
							z: 1,
							showLabelBackdrop: true,
							backdropColor: 'rgba(255, 255, 255, 0.8)',
							font: {
								size: 13
							}
						},
						pointLabels: {
							font: {
								size: 14,
								weight: 'bold'
							}
						}
					}
				},
				elements: {
					line: {
						borderWidth: 2,
						fill: true,
						borderColor: 'rgb(64, 167, 152)',
						backgroundColor: 'rgba(64, 167, 152, 0.2)'
					},
					point : {
						borderColor: '#fff',
						backgroundColor: 'rgb(64, 167, 152)'
					}
				}
			}
		});
	});
})(jQuery);
