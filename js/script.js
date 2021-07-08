"use strict";

window.addEventListener('DOMContentLoaded', () => {

	const form = document.querySelector('form'),
		  input = document.querySelector('.form__input'),
		  formBtn = document.querySelector('.form__btn'),
		  list = document.querySelector('.todo__list'),
		  listItem = document.querySelectorAll('li'),
		  closeBtn = document.querySelectorAll('.close');
	
	function crossItem(item) {
		item.classList.toggle('done');
	}

	function hideItem(item) {
		item.parentElement.style.display = 'none';
	}

	list.addEventListener('click', (e) => {
		if (e.target && e.target.tagName == 'LI') {
			crossItem(e.target);
		} else {
			hideItem(e.target);
		}
	});

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		if (input.value) {
			list.innerHTML += `<li>${input.value[0].toUpperCase()}${input.value.slice(1)} <span class="close">&times;</span></li>`;
		}
		e.target.reset();
	});

});