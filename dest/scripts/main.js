//
// Header menu
//

let header = document.querySelector(".header"),
	headerBurger = document.querySelector(".header__burger"),
	headerOverlay = document.querySelector(".header__overlay"),
	headerNavLinks = document.querySelectorAll(".header__nav-link");

function toggleMobileMenu(e) {
	header.classList.toggle("header-mobile-menu");
	headerBurger.classList.toggle("btn--cross");
	headerOverlay.classList.toggle("is-show");
	document.body.classList.toggle("overflow-hidden");
}

headerNavLinks.forEach((link) => {
	link.addEventListener("click", () => {
		if (header.classList.contains("header-mobile-menu")) toggleMobileMenu();
	});
});

headerBurger.addEventListener("click", toggleMobileMenu);
headerOverlay.addEventListener("click", toggleMobileMenu);

//
// Anchors
//

// const anchors = document.querySelectorAll('a[href*="#"]');

// for (let anchor of anchors) {
// 	anchor.addEventListener("click", function (e) {
// 		e.preventDefault();

// 		let href = this.getAttribute("href").substring(1);
// 		let topOffset = document.querySelector(".header").offsetHeight;

// 		const scrollTarget = document.getElementById(href);

// 		const elementPosition = scrollTarget.getBoundingClientRect().top;
// 		const offsetPosition = elementPosition - topOffset;

// 		window.scrollBy({
// 			top: offsetPosition,
// 			behavior: "smooth",
// 		});
// 	});
// }

//
// Accordion
//

let accordionItems = document.querySelectorAll('.js-acc');

function toggleAccordion() {
	let isExpanded = this.getAttribute('aria-expanded') === 'true';

	accordionItems.forEach(item => {
		item.setAttribute('aria-expanded', 'false');
		item.nextElementSibling.style.height = null;
	});

	if (!isExpanded) {
		this.setAttribute('aria-expanded', 'true');
		this.nextElementSibling.style.height = this.nextElementSibling.scrollHeight + 'px';
	}
}

accordionItems.forEach(item => {
	let itemContent = item.nextElementSibling;
	let parentItem = item.parentElement;

	if (item.getAttribute('aria-expanded') === 'true') {
		parentItem.classList.add('is-show');
		itemContent.style.height = itemContent.scrollHeight + 'px';

		if (item.classList.contains('faq__item-btn')) {
			let prevSibling = parentItem.previousElementSibling;
			if (prevSibling) prevSibling.classList.add('border-none');
		}
	}

	item.addEventListener('click', toggleAccordion);
});

const inputs = document.querySelectorAll('input, textarea');

inputs.forEach(input => {
	if (input.value) {
		input.parentNode.classList.add('input-has-value');
	}

	input.addEventListener('input', handleInput);
	input.addEventListener('change', handleInput);

	function handleInput() {
		if (this.value) {
			this.parentNode.classList.add('input-has-value');
		} else {
			this.parentNode.classList.remove('input-has-value');
		}
	}
});

