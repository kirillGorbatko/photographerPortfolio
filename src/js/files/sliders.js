import Swiper, { Navigation, Pagination } from 'swiper';

// Базовые стили
import "../../scss/base/swiper.scss";

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}

// Инициализация слайдеров
function initSliders() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	// Перечень слайдеров
	if (document.querySelector('.mainSlider')) {
		const mainSlider = new Swiper('.mainSlider', {
			modules: [Navigation, Pagination],

			observer: true,
			observeParents: true,
			loop: true,
			slidesPerView: 3,
			spaceBetween: 10,
			speed: 800,
			navigation: {
				nextEl: '.main-slider__arrow',
			},

			breakpoints: {
				320: {
					slidesPerView: 1,
					autoHeight: true,
					spaceBetween: 5,
					slidesPerGroup: 1,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
					slidesPerGroup: 2,
				},
				1200: {
					slidesPerView: 3,
					slidesPerGroup: 3,
				},
			},

			pagination: {
				el: '.main-slider__dotts',
				clickable: true,
			},
		});
	}
}

window.addEventListener("load", function (e) {
	initSliders();
});
