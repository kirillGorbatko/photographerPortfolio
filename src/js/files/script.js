import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

window.onload = function () {
	const $links = document.querySelectorAll('.aside__item a');

	$links.forEach(element => {
		if (element.href === document.URL) element.classList.add('_active');
	});

	document.body.classList.add('loaded_hiding');

	window.setTimeout(function () {
		document.body.classList.add('loaded');
		document.body.classList.remove('loaded_hiding');
	}, 1100);



}