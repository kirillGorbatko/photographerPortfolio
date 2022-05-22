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
		new Swiper('.mainSlider', {
			observer: true,
			observeParents: true,
			slidesPerView: 2.2,
			spaceBetween: 20,
			autoHeight: true,
			speed: 800,
		});
	}
}

window.addEventListener("load", function (e) {
	initSliders();
});