
import { DressView } from "./view/DressView.js";
import { DressController } from './controller/DressController.js';
import { DressModel } from './model/DressModel.js';

import { FormView } from './view/FormView.js';
import { FormController } from './controller/FormController.js';
import { FormModel } from './model/FormModel.js';






class App {
	constructor() {
		/*
		 * Find which page is requested. The window.location.href is used to get 
		 * the url. Then, we extract the page name from the url using a regular 
		 * expression. The string's match() method retrieves the result of 
		 * matching a string against a regular expression. Return value is an 
		 * Array whose contents depend on the presence or absence of the global 
		 * (g) flag, or null if no matches are found.
		 */


		const url = window.location.href;           // e.g. http://localhost:8383/form.html
		const match = url.match(/[a-z]+.html/);
		const page = match ? match[0] : null;   // match returns an array of matches

		switch (page) {
			case 'form.html':
				new FormController(new FormModel(), new FormView());
				break;

			default:
				new DressController(new DressModel(), new DressView());
				break;

		}



	}
}
const app = new App();



const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

/*hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});
*/

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

