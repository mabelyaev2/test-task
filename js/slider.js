const slides = document.querySelectorAll('.feedback-section__clients-block');
const dots = document.querySelector('.dots');

dots.addEventListener('click', (e) => {
	const el = e.target;
	
	if (el.classList.contains('dot')) {
        const current = [].__proto__.indexOf.call(dots.children, el);
		const activeSlide = document.querySelector('.feedback-section__clients-block:not(.info-hidden)');
		const activeDot = document.querySelector('.dot-active');
		activeSlide.classList.add('info-hidden');	
		slides[current].classList.remove('info-hidden');
		if (activeDot) {
			activeDot.classList.remove('dot-active')
		}
		
		el.classList.add('dot-active')
	} else if (activeSlide.classList.contains('info-hidden')) {
		el.classList.remove('dot-active')
	}
});