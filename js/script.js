"use strict";

window.addEventListener('DOMContentLoaded', () => {

	const form = document.querySelector('form'),
		  input = document.querySelector('.form__input'),
		  formBtn = document.querySelector('.form__btn'),
		  list = document.querySelector('.todo__list'),
		  listItem = document.querySelectorAll('li'),
		  closeBtn = document.querySelectorAll('.close');

	listItem.forEach(item => {
		item.addEventListener('click', () => {
			item.classList.toggle('done');
		});
	});

	closeBtn.forEach(item => {
		item.addEventListener('click', (e) => {
			if (e.target && e.target.parentElement.tagName == 'LI') {
				e.target.parentElement.style.display = 'none';
			}
		});
	});

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		console.log(input.value);
		list.innerHTML += `<li>${input.value} <span class="close">&times;</span></li>`
		e.target.reset();
	});
	
});