if (window.innerWidth <= 767) {
	const swiper = new Swiper('.brands-swiper', {
		slidesPerView: 1.2,
		spaceBetween: 16,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
}